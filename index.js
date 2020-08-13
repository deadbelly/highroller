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


//Tests and Logs
$('#myNumber').html(new Roll(1, 20, 0);
console.log(new Roll(3, 6, +3))
console.log(new Roll(1, 20, 0))
