import React from 'react'

function ScoreBoard(props) {
    return(
        <div className="scoreBoard">
            <h3 className="score">Score: {props.score}</h3>
            <h3 className="highScore">High Score: {props.highScore}</h3>
        </div>
    )
}

export default ScoreBoard