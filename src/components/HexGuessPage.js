import React from 'react'

const getRandomColor = () => "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);})
const colorList = [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()]
const winner = Math.floor(Math.random() * 4) 
let win1 = "none"

class HexGuessPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gameState: 'not answered'
    }
  }

  onColorClicked = (e) => {
    const answer = parseInt(e.target.id)
    const result = (winner === answer) ? 'correct' : 'incorrect'
    const winBox = document.getElementById(winner.toString())
    winBox.style.border = `.75rem solid #75D968`
    if (result === 'incorrect') {
      const answerBox = document.getElementById(answer.toString())
      console.log(answerBox)
      answerBox.style.border = '.75rem solid #FF3B1C'
    }
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