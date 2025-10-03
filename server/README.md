npm i sequelize pg pg-hstore

// Установка dev-завистимости

```bash
npm i -D sequelize-cli
// создаем файл
.sequelizerc
// Пишем конф. файл .sequelizerc

const path = require('path');

module.exports = {
  config: path.resolve('db', 'database.json'),
  'models-path': path.resolve('db', 'models'),
  'seeders-path': path.resolve('db', 'seeders'),
  'migrations-path': path.resolve('db', 'migrations'),
};

// Инициализация БД

npx sequelize-cli init

// cd server

// $ Посмотреть все команды sequelize-cli

npx sequelize

// Создаём БД

npx sequelize db:create

// Создаём скрипт в package.json

"db": "npx sequelize db:drop && npx sequelize db:create"


// $ мои данные для database.json

  "development": {
    "username": "kasanerlin",
    "password": 1303,
    "database": "database_development1",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },

//  Создаём модели

npx sequelize-cli model:generate --name Country --attributes countryName:string
npx sequelize-cli model:generate --name Club --attributes clubName:string,countryId:integer
npx sequelize-cli model:generate --name Member --attributes name:string,num:integer,clubId:integer

/// настройки юзер Id
// миграции
// Название ключа и
type: Sequelize.INTEGER,
references: {
  model: 'Users',
  key: 'id',
},
onDelete: 'CASCADE',


// Заходим в модели и прописываем
this.belongsTo() // Для дочерниго класса JS в нутри круглых скобак пишем  models через точку название файла к которому подлючаемся
// далее в фигурных скобках  foreignKey: и ключь по которому мы связываем коючи

this.hasMany() // Для родительского  класса JS

// создаем ключь в модели
// Запускаем миграции
// Название ключа и  DataTypes.INTEGER,
// создвет файл с сидами
npx sequelize-cli seed:generate --name initial-seed
// пропись в конце каждого вхожнение в таблицу
createdAt: new Date(),
      updatedAt: new Date()


// Запуск миграций водим все команды по очереди


// создание бд
npx sequelize-cli db:create
// накатывает миграции
npx sequelize-cli db:migrate
// накатывает сиды
npx sequelize-cli db:seed:all
```

### Создание сервера Node.js с нуля — Шпаргалка

---

#### Лекция 1: Подключение сервера

1. Инициализация проекта:

   npm init -y

   Это создаёт файл package.json, который нужен для управления зависимостями проекта.

2. Создание структуры проекта:

   - В корне проекта создайте папку server.
   - Внутри папки server создайте файл app.js.

3. Установка Express:
   npm install express

4. Создание файла `.env`:

   - В папке server создайте файл .env и добавьте в него:

     PORT=3000

5. Подключение библиотеки dotenv для работы с переменными окружения:

   - Сначала установите библиотеку:
     cd server
     npm install dotenv
   - Затем подключите её в файле app.js:
     require('dotenv').config();

6. Подключение Express:
   В app.js добавьте:
   const express = require('express');
   const app = express(); // Создаём экземпляр Express

7. Чтение и использование порта из `.env`:
   В app.js подключите порт, указан в .env:
   const { PORT } = process.env;

8. Установка и подключение CORS (позволяет клиенту взаимодействовать с сервером):

   - Установите библиотеку:
     npm install cors
   - Подключите её в app.js:
     const cors = require('cors');
     app.use(
     cors({
     origin: 'http://localhost:5173', // адрес клиентского приложения
     credentials: true, // передача куков
     })
     );

9. Установка и подключение Cookie-Parser (для работы с куками):

   - Установите библиотеку:
     npm install cookie-parser
   - Подключите её в app.js:
     const cookieParser = require('cookie-parser');
     app.use(cookieParser());

10. Запуск сервера:
    В app.js укажите, как запускать сервер:
    app.listen(PORT || 3000, () => {
    console.log(`Сервер запущен на порту: ${PORT || 3000}`);
    });

11. Добавление скриптов для запуска:
    В package.json добавьте в раздел "scripts":
    "start": "node server/app.js",
    "dev": "nodemon server/app.js"
    npm start

---

#### Лекция 2: Создание роутеров

Создайте src папку

1. Создайте папку `routes`:
   В папке server создайте папку routes, где будут храниться файлы маршрутов.

2. Создание базы данных (например, через Sequelize или Руками):
   Убедитесь, что база данных создана и модели таблиц готовы.

3. Создайте новый файл роутера, например, `user.router.js`:
   В папке routes создайте файл user.js и подключите Express:
   const express = require('express');
   const userRoutes = express.Router(); // Создаём объект маршрутов

4. Импортируйте модель пользователя:
   Если используется база данных, подключите её модель:
   const { User } = require('../db/models'); // путь может отличаться

5. Пример добавления маршрутов:
   В routes/user.js создайте несколько маршрутов:
   // GET: Получить всех пользователей
   userRoutes.get('/', async (req, res) => {
   try {
   const users = await User.findAll();
   res.json(users);
   } catch (error) {
   res.status(500).json({ error: 'Ошибка при получении пользователей' });
   }
   });

   // POST: Создать нового пользователя
   userRoutes.post('/', async (req, res) => {
   const { name, password } = req.body; // Получаем данные из запроса
   try {
   const newUser = await User.create({ name, password });
   res.status(201).json(newUser);
   } catch (error) {
   res.status(500).json({ error: 'Ошибка создания пользователя' });
   }
   });

6. Импорт маршрутов в `app.js`:
   Добавьте в app.js:
   const userRouter = require('./routes/user'); // подключаем файл маршрутов
   app.use('/users', userRouter); // создаём префикс URL для всех маршрутов

---

#### Лекция 3: Middleware (Промежуточные функции)

1. Что такое Middleware:
   Middleware — это функции, которые выполняются для каждого запроса перед выполнением основного маршрута.

2. Пример Middleware для отслеживания запросов:
   const logger = (req, res, next) => {
   console.log(`Запрос: ${req.method} ${req.url}`);
   next(); // передаём запрос дальше
   };

   app.use(logger); // подключаем middleware

.., [31.08.2025 18:20] 3. Пример Middleware для проверки токена:
const checkAuth = (req, res, next) => {
const token = req.headers.authorization;
if (!token || token !== 'секретный_токен') {
return res.status(401).json({ error: 'Доступ запрещён' });
}
next(); // продолжаем выполнение запроса
};

4. Добавление глобальных Middleware:
   app.use(express.json()); // для обработки JSON в теле запросов

---

#### Лекция 4: JWT (JSON Web Tokens)

1. Установка библиотеки:
   npm install jsonwebtoken

2. Генерация токена:
   В routes/user.js добавьте:
   const jwt = require('jsonwebtoken');
   const SECRET_KEY = 'your_secret_key';

   // Создание токена
   userRoutes.post('/login', (req, res) => {
   const { username, password } = req.body;
   if (username === 'admin' && password === 'password') {
   const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
   res.json({ token });
   } else {
   res.status(401).json({ error: 'Неверный логин или пароль' });
   }
   });

3. Проверка токена (Middleware):
   В app.js создайте Middleware для проверки токена:
   const verifyToken = (req, res, next) => {
   const token = req.headers.authorization?.split(' ')[1];
   if (!token) {
   return res.status(401).json({ message: 'Токен отсутствует' });
   }
   try {
   const decoded = jwt.verify(token, SECRET_KEY);
   req.user = decoded; // передаём данные из токена
   next();
   } catch (err) {
   res.status(403).json({ message: 'Невалидный токен' });
   }
   };

4. Защищённые маршруты:
   Пример использования:
   app.get('/protected', verifyToken, (req, res) => {
   res.json({ message: `Добро пожаловать, ${req.user.username}` });
   });

---

### Полный результат:

1. Инициализируйте проект командой npm init -y.
2. Установите библиотеки: npm install express dotenv cors cookie-parser jsonwebtoken.
3. Настройте в app.js базовые вещи:
   - Подключение библиотек (require).
   - Экземпляр приложения express().
   - Подключение CORS, Cookie-Parser и middleware.
4. Создайте роуты в папке routes и подключите их в app.js.
5. Настройте JWT для авторизации и защиты маршрутов.
6. Запустите сервер:
   npm run dev
