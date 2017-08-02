const express = require( 'express' );
const app = express();
const path = require( 'path' );
const nunjucks = require( 'nunjucks' );
const bodyParser = require( 'body-parser' );
const routesW = require( './routes/wiki' );
const routesU = require( './routes/user' );
const morgan = require( 'morgan' );

nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/stylesheets', express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'vendor')));

// ....can get the URL this way.....
// app.use((req, res, next) => {
//   console.log(req.url)
// })

app.use('/wiki', routesW);
app.use('/user', routesU);

app.get('/', (req, res, next) => {
  res.send('Routes require /wiki/...');
})

module.exports = app;
