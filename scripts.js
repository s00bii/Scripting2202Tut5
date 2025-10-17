let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initalize the game by setting the value inside next-lbl to nextPlayer
//hint: you could use innerText for this 
document.getElementById('next-lbl').innerText = nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    for (let i = 1; i <= 9; i++) {
        const cell = document.getElementById(`c${i}`);
        const btn = document.createElement('button');
        btn.innerText = '[ ]';
        btn.id = `btn${i}`;
        cell.appendChild(btn);
    }

    // Programatically add 'takeCell' as an event listener to all the buttons on the board
    let btns = document.querySelectorAll('button');

    for (let i=0; i<btns.length; i++)
    {
        /*
            Assign an event listener to each of the buttons in btns.
            The event to listen for should be 'click'. You will need to pass 
            the event to takeCell. Review the slides for the trick on how to ]
            pass a parameter.
        */
        btns[i].addEventListener('click', function(event) {
            takeCell(event);
        });
    }
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
    const button = event.target;
    button.innerText = `[${nextPlayer}]`;

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    button.disabled = true;

    // update next player label
    nextPlayer = (nextPlayer === 'X') ? 'O' : 'X';
    document.getElementById('next-lbl').innerText = nextPlayer;

    // Check if the game is over
    if (isGameOver())
    {
        // let the label with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        document.getElementById('game-over-lbl').innerHTML = '<h1>Game Over</h1>';
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    const btns = document.querySelectorAll('button');
    for (let i = 0; i < btns.length; i++) {
        if (!btns[i].disabled) return false;
    }
    return true;
}