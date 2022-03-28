require('babel-register');
require('babel-polyfill');

mobile.exports = {
    networks: {
        development: {
            host: '127.0.0.1:8545',
            port: '8545',
            network_id : '*' // connect to any network
        },
    },
}