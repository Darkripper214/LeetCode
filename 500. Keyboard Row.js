var findWords = function(words) {
    return words.filter(function(match) {
        // remove word if match with the rows
        if (
            !/^[qwertyuiop]*$/i.test(match) &&
            !/^[asdfghjkl]*$/i.test(match) &&
            !/^[zxcvbnm]*$/i.test(match)
        ) return false;
        
        return true;
    });
};