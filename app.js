const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const config = require('./config.json');

const moongose = require('./database');

//Settings
app.set('port', config.port);
//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({}));
//Routes
app.use('/api/library', require('./routes/library.routes'));
//Starting the the server
app.listen(app.get('port'), () => {
    console.log(`App listening on port ${app.get('port')}`)
    console.log(`Url:  http://localhost:${app.get('port')}/api/library`)
});