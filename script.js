var health = 100
var name = "Barney"
var hits = 0


const attacks = {
  slap: {
    damage: 1
  },
  punch: {
    damage: 5
  },
  kick: {
    damage: 10
  }
}

function attack(type) {
  hits++
  let choice = attacks[type]
  console.log(choice.damage)
  health -= choice.damage

  drawHealth()
}

function createButtons() {
  let template = ''
  for (let key in attacks) {
    //let type = attacks[key]
    //console.log(type)
    template +=
      `
      <button id="${key}-button" onclick="attack('${key}')">${key}!</button>
      `
  }
  document.getElementById('attack-buttons').innerHTML = template
}

function drawHealth() {
  let healthElem = document.getElementById('health')
  let nameElem = document.getElementById('name')
  let hitsElem = document.getElementById('hits')
  healthElem.innerText = health
  nameElem.innerText = name
  hitsElem.innerText = hits
}

drawHealth()
createButtons()