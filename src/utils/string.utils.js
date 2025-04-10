export const seperateWords = (str) => {
    if (!str) return;
    //changes HELLO_WORLD to Hello World
    return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export const lowerCase = (str) => {
    if (!str) return;
    return str.toLowerCase();
}

export const capitalizeFirstLetter = (str) => {
    if (!str) return;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const formatFolderName = (str) => {
    if (!str) return;
    return str
        .toLowerCase()                // convert to lowercase
        .replace(/_/g, ' ')           // replace underscores with spaces
        .replace(/\b\w/g, char => char.toUpperCase()); // capitalize first letter of each word
}