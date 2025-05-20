const express = require('express');
const app = express();
const PORT = 8080;
const { dbConnection } = require('./config/config');
const usersRoutes = require('./users');

app.use(express.json());


app.use('/users', usersRoutes);

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));