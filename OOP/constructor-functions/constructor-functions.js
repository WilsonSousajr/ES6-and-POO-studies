let car = function(){
    this.name = "Honda civic"
    this.brand = "Honda"
    this.color = "White"
    this.speed = 0

    this.getSpeed = function(){
        return this.speed
    }

    this.setSpeed = function(speed){
        this.speed = speed
    }

    this.accelerate = function(){
        let speed = this.getSpeed() + 10
        this.setSpeed(speed)
    }
}

let civic = new car()

console.log(civic.getSpeed())
civic.accelerate()
civic.accelerate()
civic.accelerate()
civic.accelerate()
civic.accelerate()
console.log(civic.getSpeed())


// Private attributes and methods with constructor functions

let car2 = function(){
    this.name = "Honda civic"
    this.brand = "Honda"
    this.color = "White"
    this.speed = 0 // Public attribute
    var maxSpeed = 200 // Private attribute

    this.getSpeed = function(){
        return this.speed
    }

    this.setSpeed = function(speed){
        this.speed = speed
    }

    this.accelerate = function(){
        let speed = this.getSpeed() + 50
        if(speed > maxSpeed){
            speed = maxSpeed
        }
        this.setSpeed(speed)
    }
}

let newCivic = new car2()

console.log(newCivic.getSpeed())
console.log(newCivic.accelerate())
console.log(newCivic.accelerate())
console.log(newCivic.accelerate())
console.log(newCivic.accelerate())
console.log(newCivic.accelerate())
console.log(newCivic.accelerate())
console.log(newCivic.getSpeed())