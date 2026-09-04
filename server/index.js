const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const connectDB = require('./config/db')
const { ensureProductSearchIndex } = require('./utils/searchIndex')

connectDB().then(() => ensureProductSearchIndex())

app.use(cors(
  {
    origin: ["http://localhost:5173", process.env.CLIENT_URL],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
  }
))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/auth', require('./routes/userRoutes'))
app.use('/api/products', require('./routes/productRoutes'))
app.use('/api/orders', require('./routes/orderRoutes'))
app.use('/api/payment', require('./routes/paymentRoutes'))
app.use('/api/analytics', require('./routes/analyticsRoutes'))

//serve client in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
  })
}else{
  app.get('/', (req, res) => {
    res.send('ShopNow API is running in development mode... !')
  })
}


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})