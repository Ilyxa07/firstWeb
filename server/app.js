require('dotenv').config();
const express = require('express');
const { PORT } = process.env;
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRouter = require('./src/routes/userRouter');
const productRouter = require('./src/routes/productRouter');

const app = express();

app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Добро пожаловать на сервер!');
});

// Подключаем роутеры
app.use('/api', userRouter); // пути: /api/login, /api/register
app.use('/api/products', productRouter); // пути: /api/products, /api/products/:id

app.listen(PORT || 3000, () => {
  console.log(`Сервер запущен на порту: ${PORT || 3000}`);
});

module.exports = app;