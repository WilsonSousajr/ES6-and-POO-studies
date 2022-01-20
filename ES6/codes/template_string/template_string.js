/*
    Template Strings

Alternative to concatenation method,
such more like an interpolation in Javascript


*/
const BODY = window.document.body
let _name = 'Will'

console.log('Hi ' + _name + ', How are you?') // Old
BODY.innerHTML = 'Hi ' + _name + ', How are you?<br/>' // Old

//New

console.log(`Hi ${_name}, How are you?`) // Use `` not '' or ""
BODY.innerHTML += `Hi ${_name}, How are you?<br/>`// New

//With the template strings you can format the console.log()

console.log(`

    Hi, ${_name},
    How are you?

`)

BODY.innerHTML += `

    Hi, ${_name},
    How are you?
    <br/>

`

//With the template strings you can do operations

console.log(`7 + 7 = ${7+7}`)
BODY.innerHTML += `7 + 7 = ${7+7}`

// And you can use functions!

function calc(x,y){
    return x*y
}

console.log(`7 X 7 = ${calc(7,7)}`)
BODY.innerHTML += `7 + 7 = ${calc(7,7)}`
