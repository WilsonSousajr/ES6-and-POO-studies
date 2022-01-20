/*

    In javascript we have three scopes: Global, Function, Block.


*/ 


// global scope
var body = window.document.body
var serie = 'friends'

function x(){
    body.innerHTML += `Global scope: ${serie} <br/>`
    console.log(serie)
    if(true){
        body.innerHTML += `Global scope: ${serie} <br/>`
        console.log(serie)
    }
}

x()

if(true){
    body.innerHTML += `Global scote: ${serie} <br/>`
    console.log(serie)
}

body.innerHTML += '<hr/>'

// Function scope

function y(){
    var game = 'God of War'
    console.log(game)
    body.innerHTML += `Function scope: ${game} <br/>`
    if(true){
        console.log(game)
        body.innerHTML += `Function scope: ${game} <br/>`
    }
}

y()

body.innerHTML += '<hr/>'


// Block scope / Hoisting

function z(){
    if(true){
        var movie = 'Matrix' // Hoisting to function scope
    }
    console.log(movie)
    body.innerHTML += `Block scope: ${movie} <br/>`
}

z()

// or

if(true){
    var food = 'Pizza' // Hoisting to global scope
}

console.log(food)
body.innerHTML += `Block scope: ${food} <br/>`

body.innerHTML += '<hr/>'

// With let the variables won't suffer hoisting, they stay at they initial scope

if(true){
    let book = 'The jedi path'
}

// console.log(book) - Error
// body.innerHTML += `Let: ${book} <br/>` - Error




// CONST - Don't will be changed during the script process

const NAME = 'Will' //Good pratice to use UPPERCASE for const

// NAME = 'José' - Error

console.log(NAME)
body.innerHTML += `Const: ${NAME} <br/>`

//In the terms of scopes, it's the same as let

function xyz(){
    const NAME = 'José' // Correct
    console.log(NAME)
    body.innerHTML += `Const: ${NAME} <br/>`
}

xyz()





