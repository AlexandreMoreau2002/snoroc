// back/index.js

const port = 3030
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const sequelize = require('./config/database.config');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// user route
app.use('/user', require('./src/routes/user.routes'));

// // news route 
// app.use('/news', require('./src/routes/news.routes'));

// // event route 
// app.use('/event', require('./src/routes/event.routes'));

// album route 
// // app.use('/album', require(./src/routes/album.router));

// // media route 
// app.use('/media', require('./src/routes/media.routes'));

// // Contact routes
// app.use('/contact', require('./src/routes/contact.routes'));

function listRoutes(app) {
  console.log('Liste des routes :');
  app._router.stack.forEach((middleware) => {
    if (middleware.route) {
      // Route normale
      console.log(`${Object.keys(middleware.route.methods).join(', ').toUpperCase()} ${middleware.route.path}`);
    } else if (middleware.name === 'router') {
      // Routes dans des routeurs imbriqués
      middleware.handle.stack.forEach((handler) => {
        if (handler.route) {
          console.log(`${Object.keys(handler.route.methods).join(', ').toUpperCase()} ${handler.route.path}`);
        }
      });
    }
  });
}

// Appeler la fonction pour afficher les routes
// listRoutes(app);

// test de l'api
app.get('/', (req, res) => res.send('Hello World'));


app.listen(port, async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection établi avec succès.');
        console.log(`Example app listening at http://localhost:${port}`)
    } catch (error) {
        console.error('impossible de se connecter a la bdd:', error);
    }
})
