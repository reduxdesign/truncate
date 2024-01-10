# Text Truncation Script

This JavaScript script provides a flexible way to truncate text content in HTML elements based on a specified maximum length. It's designed to work by targeting elements with a specific data attribute and can be easily integrated into any web project.

## Features

- Automatically truncates text in HTML elements.
- Customizable through data attributes or JavaScript options.
- Ability to specify a global maximum length override.
- Easy to integrate and lightweight.

## Installation
### Self-Host
Simply include the `truncateText.js` file in your project and add it to your HTML:
```html
<script src="path/to/truncateText.js"></script>
```
### CDN
Add the CDN link to the head of your page:
```html
// Link To be added
```

## Usage
### Basic Usage
To use the script with default settings, add the truncate-text attribute to your HTML elements:
```html
<p truncate-text="100">This is a long paragraph that will be truncated after 100 characters...</p>
In your JavaScript, call the truncateText function without any parameters:
```
```javascript
truncateText();
```

### Advanced Usage
You can customize the behavior by passing options when calling truncateText:
```javascript
// Custom attribute name and maximum length override
truncateText({ attributeName: 'data-custom-truncate', maxLengthOverride: 120 });
```

### Options
- **attributeName** (string): The attribute name to target elements for truncation (default: 'truncate-text').
- **maxLengthOverride** (number): A global maximum length to override individual element settings (default: null).

## Contributing
Contributions to this project are welcome! Please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License.
