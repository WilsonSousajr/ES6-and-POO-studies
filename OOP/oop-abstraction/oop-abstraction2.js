// More exercises about the Abstraction Pillar

class Sofa {
    constructor(color, numberOfSeats, isReclining){
        this.color = color
        this.numberOfSeats = numberOfSeats
        this.isReclining =  isReclining
    }

    reclineTheSofa(){
        if(this.isReclining === true){
            console.log('Reclining sofa!')
        }
        else{
            console.log("This sofa cannot be reclined..")
        }
    }
}

let sofas = []

sofas.push(new Sofa('red', 3, true))
sofas.push(new Sofa('blue', 6, false))

console.log(sofas)

sofas[0].reclineTheSofa()
sofas[1].reclineTheSofa()