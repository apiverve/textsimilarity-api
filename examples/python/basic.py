"""
Text Similarity API - Basic Usage Example

This example demonstrates the basic usage of the Text Similarity API.
API Documentation: https://docs.apiverve.com/ref/textsimilarity
"""

import os
import requests
import json

API_KEY = os.getenv('APIVERVE_API_KEY', 'YOUR_API_KEY_HERE')
API_URL = 'https://api.apiverve.com/v1/textsimilarity'

def call_textsimilarity_api():
    """
    Make a POST request to the Text Similarity API
    """
    try:
        # Request body
        request_body &#x3D; {
    &#x27;text1&#x27;: &#x27;I&#x27;m so excited that tomorrow is going to be sunny! Can&#x27;t wait!&#x27;,
    &#x27;text2&#x27;: &#x27;We&#x27;re pretty excited about the weather tomorrow. It&#x27;s going to be sunny!&#x27;
}

        headers = {
            'x-api-key': API_KEY,
            'Content-Type': 'application/json'
        }

        response = requests.post(API_URL, headers=headers, json=request_body)

        # Raise exception for HTTP errors
        response.raise_for_status()

        data = response.json()

        # Check API response status
        if data.get('status') == 'ok':
            print('✓ Success!')
            print('Response data:', json.dumps(data['data'], indent=2))
            return data['data']
        else:
            print('✗ API Error:', data.get('error', 'Unknown error'))
            return None

    except requests.exceptions.RequestException as e:
        print(f'✗ Request failed: {e}')
        return None

if __name__ == '__main__':
    print('📤 Calling Text Similarity API...\n')

    result = call_textsimilarity_api()

    if result:
        print('\n📊 Final Result:')
        print(json.dumps(result, indent=2))
    else:
        print('\n✗ API call failed')
