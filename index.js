var names = require('./names.min.json');

/**
 * Returns if it is Turkish name or not
 * @param {String} name Name to be detect if it is Turkish name or not.
 * @returns {boolean} Return true if it is Turkish name, false otherwise
 */
function isTurkish(name) {
    return names[name] !== undefined;
}

/**
 * Returns gender if name is Turkish name.
 * @param {String} name Name to be detect if it is male, female or unisex name.
 * @returns {String} Returns 'E' for male names, 'K' for female names and 'U' for unisex names.
 */
function getGender(name) {
    return names[name];
}

module.exports = {
    isTurkish: isTurkish,
    getGender: getGender,
    names: names,
    MALE: 'E',
    FEMALE: 'K',
    UNISEX: 'U'
};