/* Syntax = {...data} -> spread 
   Syntax = {data...} -> rest 

    Spread = literally spreads the data

*/


/* SPREAD */

//strings

let text = 'Hello World!'

console.log(...text) // spread
console.log([...text])

//arrays

let courseList1 = ['Excel', 'Programming', 'Algoritms', 'Javascript']
let courseList2 = ['Android', 'Ios', 'Windows', 'MacOs', 'GNU/Linux']

let fullCourseList = ['Base Data', 'MySQL', 'PHP', ...courseList1]

console.log(fullCourseList)


// REST

function sum(...param){  // Merge everything into an array
    let resul = 0 
    param.forEach(v => resul += v)

    return resul
}

console.log(sum(5,3,5,2,4))
