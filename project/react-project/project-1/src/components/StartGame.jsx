import { useState } from 'react'
import HomePage from './HomePage';

function StartGame({toggle}) {
    let arr = [1, 2, 3, 4, 5, 6];
    let [selectNumber, setSelecteNumber] = useState(0);
    let [dice, setDice] = useState(1);
    let [score, setScore] = useState(0);
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // console.log("rendom number", getRndInteger(1, 7))
    // console.log("selectNumber", selectNumber);
    // console.log("dice", dice);


    return (
        <div>
            <h1>Game StartGame</h1>
            <div className='startGame'>
                <div>
                    <h1>{score}</h1>
                    <h2>Total Score</h2>
                </div>
                <div className='selectNumber'>
                    {arr.map((val, i) => {
                        return <button key={i} onClick={() => {
                            setSelecteNumber(val);
                        }}>{val}</button>
                    })}
                    <h3>selected Number {selectNumber}</h3>
                </div>
            </div>
            <div className='diceScore'>
                <div>
                    <img src={`/images/dice_${dice}.png`} alt={`dice_${dice}.png`} />

                    <h3>Click on Dice to roll</h3>
                </div>
                <div>
                    <button onClick={() => {
                        setDice(getRndInteger(1, 7))
                        if (dice === selectNumber) {
                            setScore((preScore) => preScore + dice);
                            // alert('Guessed right ');

                        }
                        else {
                            setScore((preScore) => preScore - 2);
                            // alert("Missed !")

                        }
                    }}>change dice</button>
                    <button onClick={() => {
                        setScore(0);
                        setSelecteNumber(0);
                        setDice(1);
                    }}>Reset</button>
                    <button onClick={toggle}>Game Start</button>

                </div>
            </div>
        </div>
    )
}

export default StartGame
