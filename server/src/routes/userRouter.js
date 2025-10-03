const userRouter = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../../db/models');

// Убедитесь, что вы загрузили переменные окружения в самом начале вашего файла
require('dotenv').config();

userRouter.post('/login', async (req, res) => {
  const { login, password } = req.body;
  try {
    const user = await User.findOne({ where: { login } });
    console.log(user);

    if (!user) {
      return res.status(401).json({ message: 'Неверный логин или пароль' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Неверный логин или пароль' });
    }

   
    const token = jwt.sign(
      { login: user.login },
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );

    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      maxAge: 60 * 60 * 1000,
      sameSite: 'strict',
    });

    res.status(200).json({ message: 'Вы вошли', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

// остальной код регистрации останется прежним


userRouter.post('/register', async (req, res) => {
  const { login, password } = req.body;
  try {
    const existingUser = await User.findOne({ where: { login } });

    if (existingUser) {
      return res.status(400).json({ message: 'Пользователь уже существует' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ login, password: hashedPassword });
    res.status(201).json({ message: 'Пользователь создан' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = userRouter;