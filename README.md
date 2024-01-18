# Text Truncation Script

This JavaScript script provides a flexible way to truncate text content in HTML elements based on a specified maximum length. It's designed to work by targeting elements with a specific data attribute and can be easily integrated into any web project.

## Features

- Automatically truncates text in HTML elements upon page load.
- Customizable through data attributes, JavaScript options, or global configuration.
- Applies a default maximum length if no specific value is set for the attribute.
- Easy to integrate and lightweight.

## Installation

### Self-Host
Simply include the `truncate-1.1.2.js` file in your project and add it to your HTML:
```html
<script src="path/to/truncate-1.1.2.js"></script>
```
### CDN
Copy the <script> and paste into the <head> of your page
```html
<script src="https://cdn.jsdelivr.net/gh/reduxdesign/truncate@1393c3ce1ca2cb2efa2fa5016e9eaabdc2b0e5e3/truncate-1.1.1.js"></script>
```

## Usage
### Basic Usage
To use the script, add the truncate-text attribute to your HTML elements. Set the maximum characters as the value, or leave it blank to use the default length (100 characters). The script will automatically apply truncation when the page loads:
```html
<p truncate-text="100">This is a long paragraph that will be truncated after 100 characters...</p>
<p truncate-text>This paragraph will be truncated after the default 100 characters...</p>
```
In your JavaScript, call the truncateText function without any parameters:
```javascript
truncateText();
```

### Advanced Usage
You can customize the behavior globally by setting options in a window.truncateTextOptions object before including the script:
```javascript

<script>
    // Custom attribute name and maximum length override
    window.truncateTextOptions = {
        attributeName: 'data-custom-truncate',
        defaultMaxLength: 150
    };
</script>
<script src="path/to/truncate-1.1.2.js"></script>

```

### Options
- **attributeName** (string): The attribute name to target elements for truncation (default: 'truncate-text').
- **defaultMaxLength** (number): Default maximum length used when an element's truncate-text value is not set or invalid (default: 100).

## Contributing
Contributions to this project are welcome! Please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License.
