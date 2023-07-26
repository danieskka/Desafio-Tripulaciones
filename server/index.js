const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');

const error404 = require('./middlewares/error404');

const app = express();
const port = 3000;

const userRoutes = require('./routes/userRoutes');
const quizRoutes = require('./routes/quizRoutes');

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Acceso al Front con Cors
app.use(cors({
  origin: true,
  allowedHeaders: 'Content-Type',
}));

// Express Session
app.use(session({
    secret: 'jaj1121akfdj1j1jfn121451mfm',
    resave: false,
    saveUninitialized: false
  }));

// Cookie Parser
app.use(cookieParser());

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Rutas
app.use("/",userRoutes);

app.use("/",quizRoutes);

// Ruta prueba cloud
app.get("/", (req, res) => {
  res.send("¡Hola Cloud esta ruta esta funcionando :)!");
});

// Error
app.use(error404);

const server = app.listen(port, () => {
    console.log(`Puerto funcionando en el siguiente enlace: http://localhost:${port}`)
})

module.exports = server;