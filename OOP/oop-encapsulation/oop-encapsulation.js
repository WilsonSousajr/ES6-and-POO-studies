/* 

    Encapsulation pillar
        Secure - EcmaScript6 there is not the :
                                -private,
                                -public methods
        reusable
            -Heritage

*/

class Television{
    constructor(){
        this._channelRelation = [10,8,12,5,6,3,4]
        this._activeChannel = 10
        this._volume = 30
    }

    //getters and setters 

    get activeChannel(){
        return this._activeChannel
    }

    set activeChannel(channel){
        let verifyChannel =  this._channelRelation.indexOf(channel)
        if(verifyChannel !== -1){
            this._activeChannel = channel
        }
    }
}

let tv = new Television()

tv.activeChannel = 8
console.log(tv.activeChannel)