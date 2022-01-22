class Animal{
    constructor(){
        this.color = ''
        this.weight = null
    }

    eat(){
        console.log('Sleeping...')
    }

    sleep(){
        console.log('Eating...')
    }
}

class Dog extends Animal{
    constructor(){
        super()
        this.ears = 'big'
        this.breed = 'Malinois'
        this.bark = false
    }

    bark(){
        if(this.bark === true){
            console.log('Barking...')
        }
        else{
            console.log('This dog is trained')
        }
    }

}

class Bird extends Animal{
    constructor(){
        super()
        this.beak = 'pointed'
    }

    fly(){
        console.log('Flying...')
    }
}

let dog = new Dog()
let bird = new Bird()

console.log(dog)
console.log(bird)