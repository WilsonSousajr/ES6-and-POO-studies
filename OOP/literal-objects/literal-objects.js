// Literal objects are used when creating a class is unecessary

class Product{
    constructor(){
        this.name = 'Notebook'
        this.price = 2200
    }

    showProduct(){
        console.log(`${this.name} for only R$ ${this.price}`)
    }
}

let product1 = new Product()
product1.showProduct()

// --------------------------------------------------

let literalProduct = {
    name: 'Computer',
    price: 3500,
    showProduct(){ // cannot use arrow functions
        console.log(`This literal product: ${this.name} of only R$ ${this.price}`)
    }
}

literalProduct.showProduct()