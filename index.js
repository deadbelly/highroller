//Roll Objects
function Roll(sides, number, mod){
  this.rolls = setOfRolls(number, sides)
  this.modifier = mod
  this.total = mod + this.rolls.reduce(function(a, b){
    return a+b
  })
}


//Support Functions
function setOfRolls(n, m){
  var rollList = []
  while (rollList.length < m){
    rollList.push(Math.ceil(Math.random()*n))
  }
  return rollList
}

function diceTest(n){
  var possibleRolls = []
  while (possibleRolls.length < n){
    possibleRolls.push(rand(n))
     var possibleRolls = [...new Set(possibleRolls)]
  }
return possibleRolls
}


//Tests and Logs
console.log(new Roll(3, 6, +3))