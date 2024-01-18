(function() {
    // Main function for text truncation
    function truncateText(userOptions = {}) {
        // Default options setup
        const defaults = {
            attributeName: 'truncate-text',    // Default attribute name to target for truncation
            maxLengthOverride: null,           // Allows global override of maximum length
            defaultMaxLength: 100              // Default maximum length if attribute value is not set or invalid
        };

        // Merging user-provided options with defaults
        const options = { ...defaults, ...userOptions };
        const { attributeName, maxLengthOverride, defaultMaxLength } = options;

        // Validate the provided options
        if (typeof attributeName !== 'string' || (maxLengthOverride !== null && (isNaN(maxLengthOverride) || maxLengthOverride < 0))) {
            console.error('Invalid options: attributeName should be a string and maxLengthOverride should be a non-negative number or null.');
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
            // Determine maxLength - use maxLengthOverride if provided, otherwise parse the attribute value
            let maxLength = maxLengthOverride !== null ? maxLengthOverride : parseInt(element.getAttribute(attributeName), 10);

            // Use defaultMaxLength if the parsed value is invalid
            if (isNaN(maxLength) || maxLength < 0) {
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
