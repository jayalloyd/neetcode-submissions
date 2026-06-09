class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    constructor() {
        // Define special non-ASCII characters that won't appear in regular text
        this.SEPARATOR = String.fromCharCode(257);
        this.EMPTY_MARKER = String.fromCharCode(258);
    }
    encode(strs) {
    if (strs.length === 0) {
            return this.EMPTY_MARKER;
        }

        // Join all strings together using our special separator
        return strs.join(this.SEPARATOR);

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {// If the string matches our empty marker, return an empty array
        if (str === this.EMPTY_MARKER) {
            return [];
        }

        // Split the string back into an array using the separator
        // JavaScript's split() naturally handles empty strings inside the array perfectly
        return str.split(this.SEPARATOR);
    }}

