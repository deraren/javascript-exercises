const repeatString = function(string, num) {
    if (num < 0)
        {
            return "ERROR";
        }
    let returnstring = "";
    for (let i = 0; i < num; i++)
        {
            returnstring = returnstring.concat(string);
        }
    return returnstring;
};

// Do not edit below this line
module.exports = repeatString;
