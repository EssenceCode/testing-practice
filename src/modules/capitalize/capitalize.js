function capitalize(str) {
    const string = str.charAt(0).toUpperCase();

    const capitalizeString = string + str.slice(1)
    
    return capitalizeString
};

module.exports = capitalize