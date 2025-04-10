export const seperateWords = (str) => {
    //changes HELLO_WORLD to Hello World
    return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}