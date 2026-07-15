/**
 * Text Similarity API - Basic Usage Example
 *
 * This example demonstrates the basic usage of the Text Similarity API.
 * API Documentation: https://docs.apiverve.com/ref/textsimilarity
 */

const API_KEY = process.env.APIVERVE_API_KEY || 'YOUR_API_KEY_HERE';
const API_URL = 'https://api.apiverve.com/v1/textsimilarity';

/**
 * Make a POST request to the Text Similarity API
 */
async function callTextSimilarityAPI() {
  try {
    // Request body
    const requestBody &#x3D; {
    &quot;text1&quot;: &quot;I&#x27;m so excited that tomorrow is going to be sunny! Can&#x27;t wait!&quot;,
    &quot;text2&quot;: &quot;We&#x27;re pretty excited about the weather tomorrow. It&#x27;s going to be sunny!&quot;
};

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    // Check if response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Check API response status
    if (data.status === 'ok') {
      console.log('✓ Success!');
      console.log('Response data:', data.data);
      return data.data;
    } else {
      console.error('✗ API Error:', data.error || 'Unknown error');
      return null;
    }

  } catch (error) {
    console.error('✗ Request failed:', error.message);
    return null;
  }
}

// Run the example
callTextSimilarityAPI()
  .then(result => {
    if (result) {
      console.log('\n📊 Final Result:');
      console.log(JSON.stringify(result, null, 2));
    }
  });
