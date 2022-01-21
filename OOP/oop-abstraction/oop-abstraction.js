/*

    Abstraction:
        -Entity
        -Identity
        -Attributes
        -Methods

*/

class BankAccount {
    constructor(){
        this.agency = 7272
        this.accountNumber = 50505
        this.balance = 50
        this.limit = 1000
    }

    verifyIfReachedLimit(balance, limit){
        if(balance > limit){
            return true
        }
        else{
            return false
        }
    }

    verifyIfHaveBalance(balance){
        if(balance < 0){
            return false
        }
        else{
            return true
        }
    }

    deposit(amount){
        if(this.verifyIfReachedLimit(this.balance, this.limit) === true){
            console.log('No limit is available for you.')
        }else{
            this.balance += amount
        }
    }

    dreamMoney(amount){
        if(this.verifyIfHaveBalance(this.balance) === false){
            console.log("You don't have balance available")
        }else{
            this.balance -= amount
        }
    }

    consultBalance(){
        console.log(`You have: R$ ${this.balance} of balance`)
    }
}

let account_1 = new BankAccount()

account_1.consultBalance()

account_1.deposit(20)

account_1.consultBalance()

account_1.dreamMoney(30)

account_1.consultBalance()

account_1.dreamMoney(50)

account_1.consultBalance()

account_1.dreamMoney(10)

account_1.deposit(2000)

account_1.consultBalance()

account_1.deposit(10)