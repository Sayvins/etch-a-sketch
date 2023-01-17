let color = 'black'
let click = true;



function fillBoard(size) {
    let board = document.querySelector('.board')
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`

    let amount = size * size

    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div')
        square.style.backgroundColor = "white";
        square.classList.add('div-border')
        square.addEventListener('mouseover', changeColor)
        board.insertAdjacentElement('beforeend', square)
    }
}

fillBoard(16)

function changeColor() {
    if (click) {
            if (color === 'random') {
                this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
            } else {
                this.style.backgroundColor = color
        }
    }
}

function colorOnClick(choice) {
    color = choice;
}

function changeSize(input) {
    if (input >=2 && input <= 50) {
        let board = document.querySelector('.board') 
        let square = board.querySelectorAll('div')
        square.forEach((div) => (div.style.backgroundColor = 'white'))
        document.querySelector('.error').textContent = '';
        fillBoard(input)
    } else {
        document.querySelector('.error').textContent = 'You have to enter number between 2 and 50. ';
    }
}

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') {
        click = !click
        if (click) {
            document.querySelector('.mode').textContent = 'Mode: Coloring'
        } else {
            document.querySelector('.mode').textContent = 'Mode: Not Coloring'
        }
    }
})


function resetBoard() {
    let board = document.querySelector('.board') 
    let squares = board.querySelectorAll('div')
    squares.forEach((div) => (div.style.backgroundColor = 'white'))
}
