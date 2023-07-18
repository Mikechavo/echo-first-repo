// Just practicing
const treasure = (location) => {
  if(location === gold) {
  document.getElementById(`${location}`).innerHTML = "&#x1f308" 
  countClicked = countClicked + 1
  } else if(location === bomb) {
  document.getElementById(`${location}`).innerHTML = "&#x2620"
  countClicked = countClicked + 1
  } else {
 document.getElementById(`${location}`).innerHTML = "&#x1f332"
  countClicked = countClicked + 1
}
  document.getElementById("counter").innerHTML = `${countClicked}`
  countRemain = countRemain - 1
  document.getElementById("countRemain").innerHTML = `${countRemain}`
  if( location === bomb) {
    alert("Game over! Please click the restart game button and try again.")
  } else if( location === gold) {
    alert("Congrats! You've won!")
  }
  if(countRemain <= -1) {
    alert("Stop!!! Try again. Please click restart game")
  }
}
const gold = Math.floor(Math.random()*8) + 1
const bomb = Math.floor(Math.random()*8) + 1

var countClicked = 0
var countRemain = 4