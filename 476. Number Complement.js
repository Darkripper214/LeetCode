/**
 * @param {number} num
 * @return {number}
 */

var findComplement = function(num) {
    var num = num.toString(2).replace(/[0|1]/g,function(reverse){
        return Number(reverse) ^ 1;
    });
    
    return parseInt(num,2);

};