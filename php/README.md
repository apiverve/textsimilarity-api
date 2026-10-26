# Text Similarity API - PHP Package

Text Similarity compares two text strings and calculates their percentage match score. It returns case-insensitive and case-sensitive similarity scores plus the count and proportion of differing words.

## Installation

Install via Composer:

```bash
composer require apiverve/textsimilarity
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Textsimilarity\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'text1' => 'I\'m so excited that tomorrow is going to be sunny! Can\'t wait!',
    'text2' => 'We\'re pretty excited about the weather tomorrow. It\'s going to be sunny!'
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Textsimilarity\Client;
use APIVerve\Textsimilarity\Exceptions\APIException;
use APIVerve\Textsimilarity\Exceptions\ValidationException;

try {
    $response = $client->execute(['text1' => 'I\'m so excited that tomorrow is going to be sunny! Can\'t wait!', 'text2' => 'We\'re pretty excited about the weather tomorrow. It\'s going to be sunny!']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "similarity": 45.83,
    "similarityCaseSensitive": 47.22,
    "semanticSimilarity": 88.33,
    "difference": {
      "count": 7,
      "percentage": 58.33
    }
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/textsimilarity?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/textsimilarity?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/textsimilarity?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
