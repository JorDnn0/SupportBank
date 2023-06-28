

class Account {
    private bal:number = 0
    public name:string
    constructor(name,initBal:number=0) {
        this.bal = initBal
        this.name = name
    }
    public add(toAdd:number){
        this.bal += toAdd
    }

    public sub(toSub:number){
        this.bal -= toSub
    }

    public transfer(from:Account, to:Account, toTransfer:number){
        from.sub(toTransfer)
        to.add(toTransfer)
    }
}