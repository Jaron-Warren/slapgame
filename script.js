let characters = {
  Barney: {
    health: 100,
    name: 'Barney',
    hits: 0,
    weapon: []
  }
}

let weapons = {
  fireball: {
    name: 'Fireball',
    modifier: 2,
    description: 'It burns!'
  },
  sword: {
    name: 'Sword',
    modifier: 1.5,
    description: 'watch your head'
  },
  lightningBolt: {
    name: 'Lightning Bolt',
    modifier: 3,
    description: 'Ouch!'
  }
}

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

let currentTarget = characters['Barney']

function attack(type) {
  currentTarget = characters['Barney']
  currentTarget.hits++
  let choice = attacks[type]
  console.log(choice.damage)
  let change = currentTarget.health - choice.damage + addMods()
  if (change > 100) {
    change = 100
  }
  if (change < 0) {
    change = 0
  }
  currentTarget.health = change

  drawHealth()
}

function createButtons() {
  let attacksTemplate = ''
  for (let key in attacks) {
    //let type = attacks[key]
    //console.log(type)
    attacksTemplate +=
      `
      <button id="${key}-button" onclick="attack('${key}')">${key}!</button>
      `
  }
  let weaponTemplate = ''
  for (let key in weapons) {
    let type = weapons[key]
    console.log(type.name)
    weaponTemplate +=
      `
    <button id="${key}-button" onclick="getWeapon('${key}')">${type.name}!</button>
    `
  }
  document.getElementById('attack-buttons').innerHTML = attacksTemplate
  document.getElementById('weapon-buttons').innerHTML = weaponTemplate
}

function drawHealth() {
  let healthElem = document.getElementById('health')
  let nameElem = document.getElementById('name')
  let hitsElem = document.getElementById('hits')
  healthElem.innerText = currentTarget.health.toString()
  nameElem.innerText = currentTarget.name.toString()
  hitsElem.innerText = currentTarget.hits.toString()
}

function getWeapon(weapon) {
  let exists = false
  for (let key in currentTarget.weapon) {
    console.log(currentTarget.weapon[key])
    if (currentTarget.weapon[key] == weapon) {
      exists = true
    }
  }
  if (!exists) {
    currentTarget.weapon.push(weapon)
  }
  console.log(currentTarget.weapon)
}

function addMods() {
  let toteMods = 0
  currentTarget.weapon.forEach(item => {
    toteMods += weapons[item].modifier
  })
  return toteMods
}

drawHealth()
createButtons()