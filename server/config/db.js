const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log('db connected successfully')
  } catch (err) {
    console.error('db connection error:', err)
    process.exit(1)
  }
}

module.exports = connectDB;