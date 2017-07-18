const express = require( 'express' );
const app = express();
const path = require( 'path' );
const morgan = require( 'morgan' );


app.use(morgan('dev'));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));

module.exports = app;
