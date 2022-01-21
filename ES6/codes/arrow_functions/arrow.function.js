//Used to rewrite annonymous functions

let calc1 = function(x){
    return x*x
}

console.log(calc1(7))

let calc2 = (x) => {
    return x*x
}

// or

let calc3 = x => x*x // Implicit return

console.log(calc2(5))
console.log(calc3(9))
