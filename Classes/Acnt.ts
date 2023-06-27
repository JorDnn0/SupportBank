class Acnt {
    private bal:number = 0
    constructor(initBal:number=0) {
        this.bal = initBal
    }
    public add(toAdd:number){
        this.bal += toAdd
    }

    public sub(toSub:number){
        this.bal -= toSub
    }

    public transfer(from:Acnt, to:Acnt, toTransfer:number){
        from.sub(toTransfer)
        to.add(toTransfer)
    }
}