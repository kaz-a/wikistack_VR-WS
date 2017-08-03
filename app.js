const express = require( 'express' );
const app = express();
const path = require( 'path' );
const nunjucks = require( 'nunjucks' );
const bodyParser = require( 'body-parser' );
const routesW = require( './routes/wiki' );
const routesU = require( './routes/users' );
const methodOverride = require( 'method-override' );
const morgan = require( 'morgan' );

nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/stylesheets', express.static(path.join(__dirname, 'css')));
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));

app.use('/wiki', routesW);
app.use('/users', routesU);

app.get('/', (req, res, next) => {
  res.redirect('/wiki');
})

module.exports = app;
