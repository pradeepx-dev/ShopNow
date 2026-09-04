require('dotenv').config();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const connectDB = require('./config/db');
const User = require('./models/userModel');
const Product = require('./models/productModel');
const Order = require('./models/orderModel');

const products = require('./data/productsData');
const { ensureProductSearchIndex } = require('./utils/searchIndex');

const seedDatabase = async () => {
  try {
    await connectDB();

    const password = await bcrypt.hash('Password@123', 10);
    const users = await User.findOneAndUpdate(
      { email: 'admin@shopnow.demo' },
      { name: 'Demo Admin', email: 'admin@shopnow.demo', password, role: 'admin', isVerified: true },
      { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true }
    );
    const customer = await User.findOneAndUpdate(
      { email: 'customer@shopnow.demo' },
      { name: 'Aarav Sharma', email: 'customer@shopnow.demo', password, role: 'user', isVerified: true },
      { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true }
    );

    const bulkOps = products.map((product) => ({
      updateOne: {
        filter: { name: product.name },
        update: { $set: product },
        upsert: true
      }
    }));

    await Product.bulkWrite(bulkOps);
    const sampleProducts = await Product.find({}).limit(10);
    await ensureProductSearchIndex();

    // Recreate only this demo customer's orders, leaving real database data untouched.
    await Order.deleteMany({ user: customer._id });
    if (sampleProducts.length >= 5) {
      await Order.insertMany([
        {
          user: customer._id,
          items: [
            { productId: sampleProducts[0]._id, quantity: 1, price: sampleProducts[0].price },
            { productId: sampleProducts[4]._id, quantity: 1, price: sampleProducts[4].price }
          ],
          address: { fullname: 'Aarav Sharma', email: customer.email, phone: 9876543210, address: '42 Park Street', city: 'Bengaluru', state: 'Karnataka', zip: 560001, country: 'India' },
          totalAmount: sampleProducts[0].price + sampleProducts[4].price,
          paymentId: 'demo_payment_001', status: 'completed'
        },
        {
          user: customer._id,
          items: [{ productId: sampleProducts[3]._id, quantity: 2, price: sampleProducts[3].price }],
          address: { fullname: 'Aarav Sharma', email: customer.email, phone: 9876543210, address: '42 Park Street', city: 'Bengaluru', state: 'Karnataka', zip: 560001, country: 'India' },
          totalAmount: sampleProducts[3].price * 2,
          paymentId: 'demo_payment_002', status: 'pending'
        }
      ]);
    }

    const totalProductsCount = await Product.countDocuments();
    console.log(`Seed complete: 2 users (including ${users.email}), ${totalProductsCount} products in database, and 2 orders.`);
    console.log('Demo login: customer@shopnow.demo / Password@123');
  } catch (error) {
    console.error('Seeding failed:', error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
  }
};

seedDatabase();
