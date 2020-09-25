class Dice{
  constructor(number, sides, modifier){
    this._number = number
    this._sides = sides
    this._modifier = modifier
    this._rolls = []
    this._total = 0
  }

  get number(){
    return this._number
  }
  get sides(){
    return this._sides
  }
  get modifier(){
    return this._modifier
  }
  get rolls(){
    return this._rolls
  }
  get total(){
    return this._total
  }


  rollThem(){
    this._rolls = []
    while (this._rolls.length < this._number){
      this._rolls.push(Math.ceil(Math.random()*this._sides))
    }
    this._total += (this._modifier + this._rolls.reduce((a, b)=>a+b))
  }
}

function roll(){
  var dice = new Dice(1, 20, 0)
  dice.rollThem()
document.getElementById("space").value = dice.total
}
