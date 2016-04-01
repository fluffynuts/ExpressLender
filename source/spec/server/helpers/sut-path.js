var path = require('path');
module.exports = function(filePath) {
    return path.join('..', '..', filePath);
};
