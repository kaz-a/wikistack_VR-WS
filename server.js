const http = require( 'http' );
const app = require( './app' );
const server = http.createServer( app );
const db = require( './db' );

const port = process.env.PORT || 3000;

db.seed()
  .then(() => console.log('seeding done'))
  .catch(err => console.log(err));

server.listen(port, () => console.log(`listening on port ${port}`));
