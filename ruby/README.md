# Text Similarity API - Ruby Gem

Text Similarity compares two text strings and calculates their percentage match score. It returns case-insensitive and case-sensitive similarity scores plus the count and proportion of differing words.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_textsimilarity'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_textsimilarity
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_textsimilarity'

# Initialize the client
client = APIVerve::Textsimilarity::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  text1: "I'm so excited that tomorrow is going to be sunny! Can't wait!",
  text2: "We're pretty excited about the weather tomorrow. It's going to be sunny!"
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ text1: "I'm so excited that tomorrow is going to be sunny! Can't wait!", text2: "We're pretty excited about the weather tomorrow. It's going to be sunny!" })
  puts response["data"]
rescue APIVerve::Textsimilarity::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Textsimilarity::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Textsimilarity::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "simiarity": 45.83,
    "similarityCaseSensitive": 47.22,
    "difference": {
      "count": 7,
      "percentage": 58.33
    }
  }
}
```

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/textsimilarity?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/textsimilarity?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/textsimilarity?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
