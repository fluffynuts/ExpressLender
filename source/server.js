var config = require('./config');
var app = require('./server/app');

app.listen(config.port, function() {
    console.log('listening on port: ' + config.port);
});
