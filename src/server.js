require('dotenv').config({ path: '.env' });
const http = require('http');
const morgan = require('morgan');

const app = require('./app');

const port = 4000 || process.env.PORT;

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`App running at http://127.0.0.1:${port}`);
})


