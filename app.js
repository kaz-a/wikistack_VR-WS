const express = require( 'express' );
const app = express();
const path = require( 'path' );
const nunjucks = require( 'nunjucks' );
const bodyParser = require( 'body-parser' );
const morgan = require( 'morgan' );

nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));

module.exports = app;
