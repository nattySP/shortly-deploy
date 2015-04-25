var app = require('./server-config.js'),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shortly'); // connect to mongo database named shortly


app.listen(process.env.PORT || 3000);

