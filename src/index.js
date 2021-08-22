
exports.min = function min (array) {
    if (array === undefined || array.length === 0) {
        return 0
    } else {
        let val = array[0];
        array.forEach((element) => {
            if (element < val) {
                val = element;
            }
        })
        return val;
    } 
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0) {
        return 0
    } else {
        let val = array[0];
        array.forEach((element) => {
            if (element > val) {
                val = element;
            }
        })
        return val;
    }
}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0) {
        return 0
} else {
    let average;
    const sum = array.reduce( (sum, current) => {
        return sum += current;
    }, 0);
    average = sum / array.length;
    return average
}
}
