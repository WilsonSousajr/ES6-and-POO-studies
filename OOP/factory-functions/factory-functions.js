let submit = document.querySelector("#submit")
let cardArray = []

submit.addEventListener("click", function(){
    let name = document.querySelector("#name").value
    cardArray.push(cardFactory(name))

    document.querySelector("#name").value = ''
    console.log(cardArray)
})

let cardFactory = function(name){
    return {
        name,
        age: 16,
        email: 'test@test.com'
    }
}