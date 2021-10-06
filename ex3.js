let x = Number(prompt());
let y = Number(prompt());

function calc(firstNum){
    return function(secondNum){
        let funcRes = firstNum + secondNum;
        return funcRes;
    }
}

console.log(calc(x)(y));