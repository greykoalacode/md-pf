const path = require('path');
// 

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    publicRuntimeConfig: {
        API_KEY: process.env.API_KEY,
        BASE_ID: process.env.BASE_ID
    },
    images: {
        domains: ['dl.airtable.com']
    }
    // env: {
    //     apiKey: 'keyTzRnafd9F1yhmi',
    //     baseId: 'appIihJl7jnv3oE7P'
    // }
}