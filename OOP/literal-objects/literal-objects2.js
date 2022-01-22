




const button = document.querySelector("#submit")

button.addEventListener("click", function(){
    let _name = document.querySelector("#name").value
    let age = document.querySelector("#age").value
    let sex = document.querySelector('input[name="sex"]:checked').value
    let job = document.querySelector("#job").value

    const form = {
        _name,
        age,
        sex,
        job,
        showResume(){
            console.log(`
            
                Name: ${this._name}
                age: ${this.age}
                sex: ${this.sex}
                job: ${this.job}
            
            `)
        }
    }


    form.showResume()
})