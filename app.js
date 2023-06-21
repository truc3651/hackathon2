const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./api.json');

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(
  "/v1/api-docs",
  swaggerUi.serve, // ui
  swaggerUi.setup(swaggerDocument) // document
);



let routes = require('./api/routes') //importing route
routes(app)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  const errorObj = {
    context: "Create",
    type: "Error",
    values: {
    sentence: "Sorry I cannot get your point",
    options: [],
    cart: {},
    cartConfirmation: false
    }
  };
    res.status(err.status || 500);
    res.json(errorObj);
});

app.listen(port)

console.log('RESTful API server started on: ' + port)