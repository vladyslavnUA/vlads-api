const mongoose = require('mongoose');
const util = require('util');

require('dotenv').config();

const app = require('./config/express');
const router = require('./controllers/index.js');

mongoose.Promise = Promise;

const mongoUri = process.env.MONGODB_URI;
// mongoose.connect(
//   mongoUri,
//   { server: { socketOptions: { keepAlive: 1 } } }
// );
// mongoose.connection.on('error', () => {
//   throw new Error(`unable to connect to database: ${mongoUri}`);
// });

app.use(router);

mongoose.connect(mongoUri)

if (!module.parent) {
    const port = process.env.PORT
    app.listen(port, () => {
        console.log(`app listening on port ${port}`);
    });
}

module.exports = app;