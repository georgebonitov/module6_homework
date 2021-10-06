function count(x,y) {
    if ((typeof(x) != 'number') || (typeof(y) != 'number')) {
        return;
    } else if (x > y) {
        var minNum = y;
        var maxNum = x;
    } else {
        var minNum = x;
        var maxNum = y;
    }
    let countNum = minNum;
    let timer = setInterval(function() {
        if (countNum >= maxNum) {
            clearInterval(timer);
        }
        console.log(countNum);
        countNum++;
        
    }, 1000);
    return;
}

let numberOne = Number(prompt());
let numberTwo = Number(prompt());

count(numberOne, numberTwo);