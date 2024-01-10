function truncateText(options = {}) {
    // Default options are set here. These will be used if no user-defined options are provided.
    const defaults = {
        attributeName: 'truncate-text', // Default attribute name to look for in elements
        maxLengthOverride: null         // Default override for maximum length (null means no override)
    };

    // Merge the provided options with the default options.
    // If options are provided, they will override the corresponding defaults.
    const { attributeName, maxLengthOverride } = { ...defaults, ...options };

    // Validate the parameters to ensure they are of the correct type and value.
    if (typeof attributeName !== 'string' || (maxLengthOverride !== null && (isNaN(maxLengthOverride) || maxLengthOverride < 0))) {
        console.error('Invalid options: attributeName should be a string and maxLengthOverride should be a non-negative number or null.');
        return;
    }

    // Create a CSS selector string based on the attributeName.
    const attributeSelector = `[${attributeName}]`;

    // Select all elements in the document that match the attribute selector.
    const elements = document.querySelectorAll(attributeSelector);

    // Warn if no elements were found with the specified attribute.
    if (elements.length === 0) {
        console.warn(`No elements found with the attribute: ${attributeName}`);
        return;
    }

    // Iterate over each found element.
    elements.forEach(element => {
        // Determine the maxLength for the current element. If maxLengthOverride is provided and valid, use it.
        // Otherwise, get the value from the element's attribute.
        const maxLength = maxLengthOverride !== null ? maxLengthOverride : parseInt(element.getAttribute(attributeName), 10);

        // Check if the parsed maxLength is a valid number. If not, log an error and skip to the next element.
        if (isNaN(maxLength) || maxLength < 0) {
            console.error(`Invalid maxLength value for element. Expected a non-negative number, got '${maxLength}'.`);
            return;
        }

        // Perform the truncation if the element's text is longer than the maxLength.
        if (element.textContent.length > maxLength) {
            element.textContent = element.textContent.substr(0, maxLength).trim() + '...';
        }
    });
}
