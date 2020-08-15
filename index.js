//Roll Objects
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
