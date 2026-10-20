/**
 * Basic Example - Text Similarity API
 *
 * This example demonstrates how to use the Text Similarity API.
 * Make sure to set your API key in the .env file or replace '[YOUR_API_KEY]' below.
 */

require('dotenv').config();
const textsimilarityAPI = require('../index.js');

// Initialize the API client
const api = new textsimilarityAPI({
    api_key: process.env.API_KEY || '[YOUR_API_KEY]'
});

// Example query
var query = {
  "text1": "I'm so excited that tomorrow is going to be sunny! Can't wait!",
  "text2": "We're pretty excited about the weather tomorrow. It's going to be sunny!"
};

// Make the API request using callback
console.log('Making request to Text Similarity API...\n');

api.execute(query, function (error, data) {
    if (error) {
        console.error('Error occurred:');
        if (error.error) {
            console.error('Message:', error.error);
            console.error('Status:', error.status);
        } else {
            console.error(JSON.stringify(error, null, 2));
        }
        return;
    }

    console.log('Response:');
    console.log(JSON.stringify(data, null, 2));
});
