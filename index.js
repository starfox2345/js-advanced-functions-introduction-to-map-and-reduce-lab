// Your code here
function mapToNegativize(mathNum) {
    let i = 0;
    let arr = []
    while (i < mathNum.length) {
        arr.push(mathNum[i]*-1)
        i++;
    }
    return arr
}

function mapToNoChange(noChange){
    let arr = []
    for (let i = 0; i < noChange.length; i++) {
        arr.push(noChange[i])
    }
    return arr
}

function mapToDouble(toDouble){
    let arr = []
    for (let i = 0; i < toDouble.length; i++){
        arr.push(toDouble[i] * 2)
    }
    return arr
}

function mapToSquare(toSquare){
    let arr = []
    for (let i = 0; i < toSquare.length; i++){
        arr.push(toSquare[i]**2)
    }
    return arr
}

function reduceToTotal(reduceTotal, startingPoint=0){
    let arr = startingPoint;
    for (let i = 0; i < reduceTotal.length; i++){
        arr += reduceTotal[i]
    }
    return arr
}

function reduceToAllTrue(isTruthy){
    // for (let i = 0; i < isTruthy.length; i++){
    //     if (isTruthy[i] > 0 || isTruthy === 0){
    //         arr.push(isTruthy[i])
    //     } else if (isTruthy[i] < 0) {
    //         arr.push(isTruthy[i])
    //         return false
    //     } else {
    //         arr.push(isTruthy[i])
    //         // I should just make them all true XD
    //     }
    // }
    for (let i = 0; i < isTruthy.length; i++){
        if (!isTruthy[i]) return false
    }
    return true
}

function reduceToAnyTrue(anyTrue){
    for (let i = 0; i < anyTrue.length; i++){

        if (anyTrue[i]) return true
    }
    return false
}

