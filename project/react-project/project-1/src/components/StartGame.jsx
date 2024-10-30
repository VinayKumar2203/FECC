import React from 'react'

function StartGame() {
    return (
        <div>
            <h1>Game StartGame</h1>
            <div className='startGame'>
                <div>
                    <h1>0</h1>
                    <h2>Total Score</h2>
                </div>
                <div className='selectNumber'>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <h3>selected Number</h3>
                </div>
            </div>
            <div className='diceScore'>
                <div>
                    <img src="/images/dice_1.png" alt="dice_1.png" />
                    <h3>Click on Dice to roll</h3>
                </div>
                <div>
                    <button>Reset Score</button>
                </div>

            </div>
        </div>
    )
}

export default StartGame
