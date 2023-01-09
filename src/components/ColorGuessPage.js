import React from 'react'

const MainPage = () => (
  <div>
    <div>
      <h1>Guess a Color</h1>
    </div>
    <div className="question-div">
      <p>what color is #ffffff</p>
    </div>
    <div className="color-grid">
      <div className="color-box" id="color-box-one"></div>
      <div className="color-box" id="color-box-two"></div>
      <div className="color-box" id="color-box-three"></div>
      <div className="color-box" id="color-box-four"></div>
    </div>
    
  </div>
)

export default MainPage