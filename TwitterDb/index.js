var Twitter = require('twitter');

module.exports = function (config) {
    
    var client = new Twitter(config);

    return {
        create: function(obj, callback) {
            client.post('statuses/update', { status: obj }, callback);
        },

        getById: function(id, callback) {
            client.get('statuses/show', { id: id }, callback);
        },
    }
};