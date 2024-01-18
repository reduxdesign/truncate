(function() {
    // Main function for text truncation
    function truncateText(userOptions = {}) {
        // Default options setup
        const defaults = {
            attributeName: 'truncate-text',    // Default attribute name to target for truncation
            defaultMaxLength: 100              // Default maximum length if attribute value is not set or invalid
        };

        // Merging user-provided options with defaults
        const options = { ...defaults, ...userOptions };
        const { attributeName, defaultMaxLength } = options;

        // Validate the provided options
        if (typeof attributeName !== 'string') {
            console.error('Invalid option: attributeName should be a string.');
            return;
        }

        // Select all elements with the specified attribute
        const elements = document.querySelectorAll(`[${attributeName}]`);

        // Exit if no elements found
        if (elements.length === 0) {
            return;
        }

        // Process each element
        elements.forEach(element => {
            // Parse the attribute value or use the defaultMaxLength if value is invalid
            const attrValue = element.getAttribute(attributeName);
            const maxLength = attrValue ? parseInt(attrValue, 10) : defaultMaxLength;

            // Check if maxLength is valid
            if (isNaN(maxLength) || maxLength < 0) {
                console.error(`Invalid maxLength value for element. Expected a non-negative number, got '${attrValue}'. Using defaultMaxLength instead.`);
                maxLength = defaultMaxLength;
            }

            // Truncate text if it's longer than maxLength
            if (element.textContent.length > maxLength) {
                element.textContent = element.textContent.substr(0, maxLength).trim() + '...';
            }
        });
    }

    // Read user options from the global variable if provided
    const userOptions = window.truncateTextOptions || {};

    // Execute the function with user-defined or default options
    truncateText(userOptions);
})();
