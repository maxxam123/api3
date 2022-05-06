const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

app.use(cors());
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connected successful...'))
  .catch((err) => console.log(err));

app.listen(8000, () => {
  console.log('Server is listening on port 8000...');
});
