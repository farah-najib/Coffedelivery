const express = require("express");
const connectDB = require('./db/db')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const request = require('request')
const { errorHandler } = require('./middleware/errorMiddleware')
const cors = require('cors')




const productRoutes = require('./routes/products')




const app = express();
const port = 3000;

// Connect to MongoDB
connectDB();

app.use(cors())
// Allow requests from your frontend
// app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
// add these lines to accept req body for POST call
app.use(express.json())
// Serve static files (images)
app.use('/public', express.static('public'));

app.use(express.urlencoded({extended: false}))
app.use(errorHandler)
app.use('/api/products', require('./routes/productRoutes'))
app.use('/api/products2', productRoutes)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
/////////////////////////////////
app.get("/", (req, res) => {
  res.send("Hello World!");
});


// Define authentication routes
app.use('/auth', authRoutes);

// Define user routes
app.use('/user', userRoutes);

// app.get("/products", (req, res) => {
//   request(
//     "https://api.sampleapis.com/coffee/hot",
//     function (err, response, body) {
//       if (!err && response.statusCode == 200) {
//         var products = JSON.parse(body);
//         const min = 5;
//         const max = 10;
//         const diff = max - min;
//         products.map((element) => {
//           const randomDecimal = Math.random() * diff + min;
//           element["price"] = randomDecimal.toFixed(2);

//           delete element["id"];
//         });
//         res.json(products);
//       }
//     }
//   );
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
