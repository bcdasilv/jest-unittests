function sum(a, b){
    return a + b;
}

exports.div = function(a, b) {
    if  (b === 0)
        throw new Error("Div by zero!");
    return a / b;
}

exports.containsNumbers = ((text) => {
    for (let i = 0; i < text.length; i++) {
        if (!isNaN(text.charAt(i)))
            return true;
    }
    return false;
});

//Also, note different ways to export functions.

exports.sum = sum;
// exports.div = div;
// exports.containsNumbers = containsNumbers;