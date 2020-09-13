const Hashids = require('hashids');
const axios = require('axios');

module.exports = {
    createUniqueCode: function(url) { 
        const datetime = new Date().getTime();
        const hashids = new Hashids(url, 5);
        const hash = hashids.encode(datetime);
        return hash; 
    }
}