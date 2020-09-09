document.addEventListener('DOMContentLoaded', () => {

const cardArray = [

  {
    name: 'dziad',
    img: 'images/dziad.png'
  },
  {
    name: 'dziad',
    img: 'images/dziad.png'
  },

  {
    name: 'mush',
    img: 'images/mush.png'
  },
  {
    name: 'mush',
    img: 'images/mush.png'
  },

  {
    name: 'mushrom',
    img: 'images/mushrom.png'
  },

  {
    name: 'mushrom',
    img: 'images/mushrom.png'
  },
  {
    name: 'scream',
    img: 'images/scream.png'
  },
  {
    name: 'scream',
    img: 'images/scream.png'
  },

  {
    name: 'skull',
    img: 'images/skull.png'
  },
  {
    name: 'skull',
    img: 'images/skull.png'
  },

  {
    name: 'time',
    img: 'images/time.png'
  },
  {
    name: 'time',
    img: 'images/time.png'
  },
]

  cardArray.sort(() => 0.5 - Math.random())



const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//creating board for GAMING
function createBoard () {

  for (let i = 0; i < cardArray.length; i++) {
    var card = document.createElement('img')
    card.setAttribute('src', 'images/grass.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
  }
}

//check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
      if (cardsChosen[0] === cardsChosen[1])  {

        alert ('znalazles pare koleszko')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener("click", flipCard); 
        cards[optionTwoId].removeEventListener("click", flipCard);
        cardsWon.push(cardsChosen)
      }  
      
      else   {
        
        cards[optionOneId].setAttribute('src', 'images/grass.png')
        cards[optionTwoId].setAttribute('src', 'images/grass.png')
        alert ('sorry, lipa')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length

      if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Zwycienstwo'
      }
  }


//flip card
  function flipCard(){

    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
      setTimeout(checkForMatch, 500)
    }
  }


createBoard()

})