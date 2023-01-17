import React, { useState } from 'react'
let colorList = []
let winner
const gameReset = () => {
  const getRandomColor = () => "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);})
  colorList = [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()]
  winner = Math.floor(Math.random() * 4)
}


gameReset()

const HexGuessPage = () => {
  const [score, setScore] = useState(0)
  const [gamesPlayed, setGamesPlayed] = useState(0)
  const [hasAnswered, setHasAnswered] = useState(false)

  const onColorClicked = (e) => {
    const answer = parseInt(e.target.id)
    const guessedCorrect = (winner === answer) ? true : false
    const winBox = document.getElementById(winner.toString())
    winBox.style.border = `.75rem solid #75D968`
    setHasAnswered(true)
    setGamesPlayed(gamesPlayed + 1) 
    if (guessedCorrect) {
      setScore(score + 1)
    } else {
      const answerBox = document.getElementById(answer.toString())
      answerBox.style.border = '.75rem solid #FF3B1C'
    }
  }
  const reload = () => {
    setHasAnswered(false)
    window.location.reload()
  }
  return (
    <div className="page-container">
      <div className="header">
        <h1>Guess the Color</h1>
      </div>
      <div className="container">
        <div className="item question-box">
          <p>What color is {colorList[winner]}?</p>
          {hasAnswered ? <button onClick={reload}>Try Again</button> : <div></div>}
            <p>Score: {score}</p>
        </div>
        <div
          className="item"
          id="0"
          style={{backgroundColor: colorList[0]}}
          onClick={onColorClicked}
        ></div>
        <div
          className="item"
          id="1"
          style={{backgroundColor: colorList[1]}}
          onClick={onColorClicked}
        ></div>
        <div
          className="item"
          id="2"
          style={{backgroundColor: colorList[2]}}
          onClick={onColorClicked}
        ></div>
        <div
          className="item"
          id="3"
          style={{backgroundColor: colorList[3]}}
          onClick={onColorClicked}
        ></div>
      </div>
    </div>
  )
}

export default HexGuessPage