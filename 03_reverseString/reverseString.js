const reverseString = function(string) {
    let res = [];
    let len = string.length - 1;

    for (len; len >= 0; len--) {
        res.push(string[len]);
    }

    return res.join('');
};

// Do not edit below this line
module.exports = reverseString;
