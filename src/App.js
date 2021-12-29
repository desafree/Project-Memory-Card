import React, {useState,useEffect} from 'react'
import ScoreBoard from './component/scoreboard';
import Cards from './component/cards';
import './App.css';

function App() {
  const [score,setScore] = useState(0);
  const [bestScore,setBestScore] = useState(0);
  const [imagesArray, setImagesArray] = useState([])

  function clickImg(e) {
    if(!imagesArray.includes(e.target.id)) {
      setImagesArray(imagesArray.concat(e.target.id));
      increaseScore()
    }
    else{
      zeroScore();
    }
  }

  function increaseScore() {
    setScore(score+1);
  }

  function zeroScore() {
    setScore(0)
    setImagesArray([])
  }

  function increaseHighScore() {
    setBestScore(bestScore+1)
  }




useEffect(()=>{
  if(score>bestScore) {
    increaseHighScore();
  }

},[score]);

return (
  <div className="container">
    <ScoreBoard score={score} highScore={bestScore}/>
    <Cards click={clickImg} />
  </div>
)

 

}

export default App;


