const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products');
const config = require('./config/dev');
const FakeDb = require('./fake-db');
const app = express()

const path = require('path');
const { fileURLToPath } = require('url');



mongoose.connect(config.DB_URI).then(
  () => {
     const fakeDb = new FakeDb();
     fakeDb.initDb()
  }
);

app.use('/api/v1/products', productRoutes)

const appPath = path.join( __dirname, '..', 'dist', 'udemy-lesson')
app.use(express.static(appPath))
app.get("*", function(req, res) {
 res.sendFile(path.resolve(appPath, 'index.html'))
})

const port = process.env.PORT || "3001";

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
//'mongodb+srv://test:qsVfMtjYDrKoTUa8@cluster0.79daa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
