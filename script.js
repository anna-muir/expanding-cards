
//Selects all elements with class of card and sets to const cards, creating an array
const cards = document.querySelectorAll('.card');

//For each card element in array cards, add event listener click
//When a card is clicked, all active classes are removed in removeActive
//Then, the active class is added to the clicked card
cards.forEach((card) => {
    card.addEventListener('click', () => {
        removeActive();
        card.classList.add('active')
    })
})

const removeActive = () => {
    cards.forEach((card) => {
        card.classList.remove('active')
    })

}



// const cardOne = document.getElementById('card-one');
// const cardTwo = document.getElementById('card-two');
// const cardThree = document.getElementById('card-three');
// const cardFour = document.getElementById('card-four');
// const cardFive = document.getElementById('card-five');



// const toggle = () => {
//     cardOne.classList.add('active')
//     cardTwo.classList.remove('active')
//     cardThree.classList.remove('active')
//     cardFour.classList.remove('active')
//     cardFive.classList.remove('active')

// }

// const toggleTwo = () => {
//     cardTwo.classList.add('active')
//     cardOne.classList.remove('active')
//     cardThree.classList.remove('active')
//     cardFour.classList.remove('active')
//     cardFive.classList.remove('active')

// }

// const toggleThree = () => {
//     cardThree.classList.add('active')
//     cardTwo.classList.remove('active')
//     cardFour.classList.remove('active')
//     cardFive.classList.remove('active')
//     cardOne.classList.remove('active')

// }

// const toggleFour = () => {
//     cardFour.classList.add('active')
//     cardFive.classList.remove('active')
//     cardOne.classList.remove('active')
//     cardTwo.classList.remove('active')
//     cardThree.classList.remove('active')

// }

// const toggleFive = () => {
//     cardFive.classList.add('active')
//     cardOne.classList.remove('active')
//     cardTwo.classList.remove('active')
//     cardThree.classList.remove('active')
//     cardFour.classList.remove('active')

// }


// cardOne.addEventListener('click', toggle)
// cardTwo.addEventListener('click', toggleTwo)
// cardThree.addEventListener('click', toggleThree)
// cardFour.addEventListener('click', toggleFour)
// cardFive.addEventListener('click', toggleFive)

