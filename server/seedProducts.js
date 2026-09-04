require('dotenv').config();

const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Product = require('./models/productModel');
const products = require('./data/productsData');
const { ensureProductSearchIndex } = require('./utils/searchIndex');

const seedProductsOnly = async () => {
  try {
    console.log(`Starting database product seeder...`);
    console.log(`Loaded ${products.length} products from dataset.`);

    await connectDB();

    // Use bulkWrite for optimal performance with 300+ items
    const bulkOps = products.map((product) => ({
      updateOne: {
        filter: { name: product.name },
        update: { $set: product },
        upsert: true
      }
    }));

    console.log(`Executing bulk upsert operations for ${bulkOps.length} items...`);
    const bulkResult = await Product.bulkWrite(bulkOps);

    console.log(`\n✅ Database seed successful!`);
    console.log(`- Upserted: ${bulkResult.upsertedCount}`);
    console.log(`- Matched: ${bulkResult.matchedCount}`);
    console.log(`- Modified: ${bulkResult.modifiedCount}`);

    // Category Breakdown Summary
    const categoryStats = await Product.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    console.log('\n📊 Category Distribution in Database:');
    categoryStats.forEach((stat) => {
      console.log(`- ${stat._id}: ${stat.count} products`);
    });

    const totalInDb = await Product.countDocuments();
    console.log(`\n🎉 Total Products in Database: ${totalInDb}`);

    console.log('\nEnsuring Atlas Search index is configured...');
    await ensureProductSearchIndex();

    console.log('Product seeding completed successfully.');
  } catch (error) {
    console.error('❌ Product seeding failed:', error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
  }
};

seedProductsOnly();
