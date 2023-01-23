import React, { useState } from 'react'
let colorList = []
let winner
const gameReset = () => {
  const getRandomColor = () => '#000000'.replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);})
  colorList = [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()]
  winner = Math.floor(Math.random() * 4)
}

gameReset()

const HexGuessPage = () => {
  const [score, setScore] = useState(0)
  const [gamesPlayed, setGamesPlayed] = useState(0)
  const [hasAnswered, setHasAnswered] = useState(false)

  const onColorClicked = (e) => {
    if (hasAnswered) {
      return
    }
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
    gameReset()
    document.getElementById("0").style.border = 'none'
    document.getElementById("1").style.border = 'none'
    document.getElementById("2").style.border = 'none'
    document.getElementById("3").style.border = 'none'
  }
  const getScoreRatio = () => {
    let ratio = Math.round(score / gamesPlayed * 100)
    if (ratio > 0) {
      return ratio
    } else {
      return 0
    }
  }
  return (
    <div className="page-container">
      <div className="header">
        <h1 className="header-title">Guess the Color</h1>
        <button className="retry-button" id = {!hasAnswered ? "disabled-button" : ""} onClick={reload}>NEXT</button>
      </div>
      <div className="container">
        <div className="item question-box">
          <h2>What color is {colorList[winner]}?</h2>
          <p>Score: {score} / {gamesPlayed}</p>
          <p>{getScoreRatio(score, gamesPlayed)}%</p>
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