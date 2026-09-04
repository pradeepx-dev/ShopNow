require('dotenv').config();

const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Product = require('./models/productModel');
const homeProducts = require('./data/homeProductsData');
const { ensureProductSearchIndex } = require('./utils/searchIndex');

const seedHomeProducts = async () => {
  try {
    console.log(`Starting homepage products seeder...`);
    console.log(`Loaded ${homeProducts.length} homepage products from dataset.`);

    await connectDB();

    // Prepare bulk upsert operations
    const bulkOps = homeProducts.map((product) => {
      // Calculate discount if not present or ensure it matches
      const price = product.price;
      const originalPrice = product.originalPrice || price;
      const discount = originalPrice > price 
        ? Math.round(((originalPrice - price) / originalPrice) * 100) 
        : (product.discount || 0);

      const productDoc = {
        name: product.name,
        price,
        originalPrice,
        discount,
        description: product.description,
        imageURL: product.imageURL,
        category: product.category,
        brand: product.brand,
        gender: product.gender || 'Unisex',
        sizes: product.sizes || [],
        colors: product.colors || [],
        badge: product.badge || '',
        rating: product.rating || 4.5,
        numReviews: product.numReviews || 100,
        stock: product.stock || 50
      };

      return {
        updateOne: {
          filter: { name: product.name },
          update: { $set: productDoc },
          upsert: true
        }
      };
    });

    console.log(`Executing bulk upsert operations for ${bulkOps.length} homepage items...`);
    const bulkResult = await Product.bulkWrite(bulkOps);

    console.log(`\n✅ Homepage products seeded successfully into database!`);
    console.log(`- Upserted: ${bulkResult.upsertedCount}`);
    console.log(`- Matched: ${bulkResult.matchedCount}`);
    console.log(`- Modified: ${bulkResult.modifiedCount}`);

    const totalProducts = await Product.countDocuments();
    console.log(`\n🎉 Total Products in Database: ${totalProducts}`);

    console.log('\nEnsuring Atlas Search index is configured...');
    await ensureProductSearchIndex();

    console.log('Homepage product seeding completed successfully.');
  } catch (error) {
    console.error('❌ Homepage product seeding failed:', error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
  }
};

seedHomeProducts();
