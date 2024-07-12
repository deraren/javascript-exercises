const sumAll = function(no1, no2) {
    if(no1<0 || no2<0)
        {
            return "ERROR";
        }
    if(typeof(no1)!="number" || typeof(no2)!="number")
        {
            return "ERROR";
        }
    if (no2 < no1)
        {
            let temp = no1;
            no1 = no2;
            no2 = temp;
        }
    let i = no2-no1;
    let sum = no1;
    let num =no1+1;
    for (let j = 0; j < i; j++)
        {
            sum += num;
            num += 1;
        }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
