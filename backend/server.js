const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
const dotenv = require('dotenv');
// const path = require('path');

require('./db/connect');
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Node!');
});


app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/tasks', require('./routes/todoRoutes'));


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
