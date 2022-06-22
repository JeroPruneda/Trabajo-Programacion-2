var createError = require('http-errors');
var express = require('express');
var path = require('path');



var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session'); //aca requerimos el paquete de session
var db = require('./database/models');


var indexRouter = require('./routes/index');
var productoDetalleRouter = require('./routes/productoDetalle');
var profileRouter = require("./routes/profile");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); //setea las cookies 
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'a_secret_word',
  resave: false,
  saveUninitialized: true
}))//aca configuramos el paquete session, lo insertamos en app el paquete de session que requerimos
//pasarle algo al cliente e identificarlo


// Session middleware //setea res.locals.usuario lo que hay en la sesion del usuario // nos permite hacer lo del header
app.use(function(req, res, next) {
  res.locals.usuario = req.session.usuario; //podemos llamarlo desde cualquier vista, le pasa a todas las vistas una variable
  next();
})//me ahorra que tenga que llamar siempre res.session.usuario.usuario en las vistas //funciona mientras no se reinice

// Cookie middleware //se fija si el usuario no esta logueado, si no esta lo busca en la base de datos y lo loguea
app.use(function(req, res, next) {
  if (!req.session.usuario && req.cookies.usuarioId) { 
    // Find the user
    db.Usuarios.findByPk(req.cookies.usuarioId) //si no esta loeguado fijate si esta la cookie y si esta, ponela a en la session
    .then(function(usuario) {
      // Act as login
      req.session.usuario = usuario; 
      next();
    })
  } else {
    next();
  }
})

app.use('/', indexRouter);
app.use('/productoDetalle', productoDetalleRouter);
app.use("/profile", profileRouter);

// catch 404 and forward to error handler
//  app.use(function(req, res, next) {
//   next(createError(404));
// }); 

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
