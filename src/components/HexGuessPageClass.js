import React from 'react'

const getRandomColor = () => "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);})
const colorList = [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()]
const winner = Math.floor(Math.random() * 4) 
let score = 0

class HexGuessPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gameState: 'not answered',
    }
  }

  onColorClicked = (e) => {
    const answer = parseInt(e.target.id)
    const result = (winner === answer) ? 'correct' : 'incorrect'
    const winBox = document.getElementById(winner.toString())
    winBox.style.border = `.75rem solid #75D968`
    this.setState({
      gameState: 'answered'
    })
    if (result === 'incorrect') {
      const answerBox = document.getElementById(answer.toString())
      answerBox.style.border = '.75rem solid #FF3B1C'
    }
    console.log(result)
    this.setState({
      gameState: 'answered'
    })
  }
  
  reloadPage = () => window.location.reload()

  render() {
    return (
      <div className="page-container">
        <div>
          <h1>Guess a Hex</h1>
        </div>
        <div className="container">
          <div className="item question-box">
            <p>What color is {colorList[winner]}?</p>
            {this.state.gameState === 'answered' ? <button onClick={this.reloadPage}>Try Again</button> : <div></div>}
            <p>Score: {score}</p>
          </div>
          <div
            className="item"
            id="0"
            style={{backgroundColor: colorList[0]}}
            onClick={this.onColorClicked}
          >&#x2713;</div>
          <div
            className="item"
            id="1"
            style={{backgroundColor: colorList[1]}}
            onClick={this.onColorClicked}
          >	&#x10102;</div>
          <div
            className="item"
            id="2"
            style={{backgroundColor: colorList[2]}}
            onClick={this.onColorClicked}
          ></div>
          <div
            className="item"
            id="3"
            style={{backgroundColor: colorList[3]}}
            onClick={this.onColorClicked}
          ></div>
        </div>
      </div>
    )
  }
}

export default HexGuessPage