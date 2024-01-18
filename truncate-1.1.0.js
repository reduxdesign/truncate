(function() {
    // Define the main function for text truncation
    function truncateText(userOptions = {}) {
        // Default options
        const defaults = {
            attributeName: 'truncate-text',
            maxLengthOverride: null
        };

        // Merge user-defined options with default options
        const options = { ...defaults, ...userOptions };
        const { attributeName, maxLengthOverride } = options;

        // Validate options
        if (typeof attributeName !== 'string' || (maxLengthOverride !== null && (isNaN(maxLengthOverride) || maxLengthOverride < 0))) {
            console.error('Invalid options: attributeName should be a string and maxLengthOverride should be a non-negative number or null.');
            return;
        }

        // Select elements with the specified attribute
        const elements = document.querySelectorAll(`[${attributeName}]`);
        
        // If no elements found, exit the function early
        if (elements.length === 0) {
            return;
        }

        // Process each element
        elements.forEach(element => {
            // Use the maxLengthOverride if provided, otherwise get the length from the attribute
            const maxLength = maxLengthOverride !== null ? maxLengthOverride : parseInt(element.getAttribute(attributeName), 10);

            // Check if maxLength is valid
            if (isNaN(maxLength) || maxLength < 0) {
                console.error(`Invalid maxLength value for element. Expected a non-negative number, got '${maxLength}'.`);
                return;
            }

            // Truncate text if necessary
            if (element.textContent.length > maxLength) {
                element.textContent = element.textContent.substr(0, maxLength).trim() + '...';
            }
        });
    }

    // Check for user-defined global options and use them if available
    const userOptions = window.truncateTextOptions || {};

    // Automatically execute the function with user-defined or default options
    truncateText(userOptions);
})();
