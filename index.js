//new code
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

var testRoll = new Dice(1, 20, 0)

testRoll.rollThem()

document.write(testRoll.total)

//old code
/*
function Roll(sides, number, mod){
  this.rolls = setOfRolls(number, sides)
  this.modifier = mod
  this.total = mod + this.rolls.reduce(function(a, b){
    return a+b
  })
}

  document.write(new Roll(1, 20, 0).total)

//Support Functions
function setOfRolls(n, m){
  var rollList = []
  while (rollList.length < m){
    rollList.push(Math.ceil(Math.random()*n))
  }
  return rollList
}
*/
