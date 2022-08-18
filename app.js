

let animals = [
  {
    name: 'Manny',
    emoji: '🐒',
    mammal: true,
    age: 16,
    diet: ['fruits', 'meat'],
    weapon: 'teeth',
    guilty: false
  },
  {
    name: 'George',
    emoji: '🦍',
    mammal: true,
    age: 12,
    diet: ['fruits', 'vegetables'],
    weapon: 'claws',
    guilty: false
  },
  {
    name: 'Orsen',
    emoji: '🦧',
    mammal: true,
    age: 22,
    diet: ['fruits', 'vegetables', 'meat'],
    weapon: 'claws',
    guilty: false
  },
  {
    name: 'Oslo',
    emoji: '🐃',
    mammal: true,
    age: 33,
    diet: ['vegetables'],
    weapon: 'horns',
    guilty: false
  },
  {
    name: 'Jeff jr.',
    emoji: '🐊',
    mammal: false,
    age: 8,
    diet: ['meat'],
    weapon: 'teeth',
    guilty: false
  },
  {
    name: 'Jeff sr.',
    emoji: '🐊',
    mammal: false,
    age: 23,
    diet: ['meat'],
    weapon: 'teeth',
    guilty: false
  },
  {
    name: 'Madam Blackwell',
    emoji: '🐈‍⬛',
    mammal: true,
    age: 10,
    diet: ['meat', 'vegetables'],
    weapon: 'claws',
    guilty: false
  },
  {
    name: 'Tony',
    emoji: '🐄',
    mammal: true,
    age: 11,
    diet: ['fruit', 'vegetables'],
    weapon: 'Horns',
    guilty: false
  },
  {
    name: 'Chomps',
    emoji: '🦖',
    mammal: false,
    age: 100000000000,
    diet: ['meat'],
    weapon: 'teeth',
    guilty: false
  },
  {
    name: 'Buster',
    emoji: '🦕',
    mammal: false,
    age: 10000320000,
    diet: ['fruits', 'vegetables'],
    weapon: 'claws',
    guilty: false
  },
  {
    name: 'Chuck',
    emoji: '🐓',
    mammal: false,
    age: 10,
    diet: ['vegetables'],
    weapon: 'claws',
    guilty: false
  },
  {
    name: 'Sarah',
    emoji: '🦥',
    mammal: true,
    age: 24,
    diet: ['fruits'],
    weapon: 'claws',
    guilty: false
  },
  {
    name: 'Gloria',
    emoji: '🦛',
    mammal: true,
    age: 13,
    diet: ['meat', 'vegetables'],
    weapon: 'teeth',
    guilty: false
  },
  {
    name: 'Larry',
    emoji: '🦏',
    mammal: true,
    age: 4,
    diet: ['vegetables'],
    weapon: 'horns',
    guilty: false
  },
  {
    name: 'Bob',
    emoji: '🐉',
    mammal: false,
    age: 3000,
    diet: ['meat', 'vegetables', 'fruit'],
    weapon: 'horns',
    guilty: false
  },
  {
    name: 'Malinda',
    emoji: '🦞',
    mammal: false,
    age: 400,
    diet: ['meat'],
    weapon: 'claws',
    guilty: false
  },
  {
    name: 'Reggie',
    emoji: '🐢',
    mammal: false,
    age: 99,
    diet: ['vegetables'],
    weapon: 'teeth',
    guilty: false
  },
  {
    name: 'Jane',
    emoji: '🦫',
    mammal: true,
    age: 32,
    diet: [ 'vegetables'],
    weapon: 'teeth',
    guilty: false
  },
]

function murder(){
  let randomAnimal = animals[Math.floor(Math.random()*animals.length)]
  console.log(randomAnimal);
  randomAnimal.guilty = true
}

function drawSuspects(){
let template = ''
animals.forEach(a => template += a.emoji)
document.getElementById('suspects').innerText = template
}

function drawClue(){
  let guilty = animals.find(a => a.guilty == true)
  let options = ['age', 'mammal', 'diet', 'weapon']
  let randomOption = options[Math.floor(Math.random()*4)]
  let clue = ''
  switch(randomOption){
    case 'age':
      clue = `<p>this animal is ${guilty.age} years old.</p>`
      break;
      case 'diet': 
      clue = `<p>this animal eats ${guilty.diet.join(' and ')}</p>`
      break;
      case 'weapon' :
        clue = `<p>this animal fights with it's ${guilty.weapon}</p>`
        break;
      case 'mammal' :
        if(guilty.mammal == true){
          clue = '<p>this animal is a mammal</p>'
        } else {
          clue = '<p>this animal is not a mammal</p>'
        }
        break;
  }
  document.getElementById('clue').innerHTML += clue
}

function filterMammals(){
  let mammals = animals.filter(a => a.mammal == true)
  let template = ''
  mammals.forEach(a => template += a.emoji)
  document.getElementById('suspects').innerText = template
}

function filterNotMammals(){
  let nonMammals = animals.filter(a => a.mammal != true)
  let template = ''
  nonMammals.forEach(a => template += a.emoji)
  document.getElementById('suspects').innerText = template
}

function filterClaws(){
  let clawAnimals = animals.filter(a => a.weapon == 'claws')
  let template = ''
  clawAnimals.forEach(a => template += a.emoji)
  document.getElementById('suspects').innerText = template
}

function filterTeeth(){
  let teethAnimals = animals.filter(a => a.weapon == 'teeth')
  let template = ''
  teethAnimals.forEach(a => template += a.emoji)
  document.getElementById('suspects').innerText = template
}

function filterHorns(){
  let hornAnimals = animals.filter(a => a.weapon == 'horns')
  let template = ''
  hornAnimals.forEach(a => template += a.emoji)
  document.getElementById('suspects').innerText = template
}

function filterCarnivores(){
  let carnivores = animals.filter(a => a.diet.includes('meat'))
  let template = ''
  carnivores.forEach(a => template += a.emoji)
  document.getElementById('suspects').innerText = template
}
function filterHerbivores(){
  let carnivores = animals.filter(a => a.diet.includes('vegetables') || a.diet.includes('fruits'))
  let template = ''
  carnivores.forEach(a => template += a.emoji)
  document.getElementById('suspects').innerText = template
}

function sortOld(){
  let old = animals.sort((a,b) => b.age - a.age)
  let template = ''
  old.forEach(a => template += a.emoji)
  document.getElementById('suspects').innerText = template
}

function sortYoung(){
  let young = animals.sort((a,b) => a.age - b.age)
  let template = ''
  young.forEach(a => template += a.emoji)
  document.getElementById('suspects').innerText = template
}

function guess(nameClicked){
  let animal = animals.find(a => a.name == nameClicked)
  if(animal.guilty == true){
    window.alert('you found the murderer')
  } else {
    window.alert('the murderer is still loose')
    drawClue()
  }
}


// NOTE functions to run when page loads
murder()
drawSuspects()
drawClue()