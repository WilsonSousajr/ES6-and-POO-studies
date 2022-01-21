// Object orientation - data structures with behaviors

/*

    Differences between the Functional Paradigm and Object Oriented Paradigm

*/

// Functional

let a = 5;
let b = 3;
let operation = 'multiply'

function calculate(a,b,operation){
    if(operation === 'multiply'){
        return a * b
    }
}

console.log(calculate(a,b,operation))

// Object Oriented

class Calculator{
    constructor(){
        this.a = 10;
        this.b = 4;
        this.operation = 'multiply'
    }

    calculate(){
        if(this.operation === 'multiply'){
            return this.a * this.b
        }
    }
}

let calculator = new Calculator()

console.log(calculator.calculate())
