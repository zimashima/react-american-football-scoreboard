//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homescore, setHomeScore] = useState(0);
  const [awayscore, setAwayScore] = useState(0);
  const [timer, setTimer] = useState(0);
  const [sec, setSecond] = useState(0);
  const [sec2, setSecond2] = useState(0);
  const [min, setMin] = useState(0);
  const [min2, setMin2] = useState(0);


    // setInterval(() =>{
    //   if (sec > 9){
    //     clearInterval();
    //   }
    //   setSecond(sec+1);
    // },1000);
    
    // setInterval(()=>{
    //   if (sec2 ===60){
    //     setSecond2(0);
    //   }
    //   setSecond2(sec2+1);
    // }, 10000)

    // setInterval(()=>{
    //   if (min ===10){
    //     setMin(0);
    //   }
    //   setMin(min+1);
    // }, 600000)

    // setInterval(()=>{
    //   if (min2 ===1 && min===5){
    //     clearInterval()
    //   }
    //   setMin(min+1);
    // }, 6000000)


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score" >{homescore}</div>
          </div>
          <div className="timer">{min2}{min}:{sec2}{sec}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayscore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {()=> setHomeScore(homescore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {()=> setHomeScore(homescore + 3)}>Home Field Goal</button>
        </div>
        <div className="resetButton"><button className="resetButton__reset" onClick = {()=> (setHomeScore(0), setAwayScore(0))}>Reset</button></div>
        <div className="quarterButton"><button className="quarterButton__count">Quarter</button></div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown"  onClick = {()=> setAwayScore(awayscore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {()=> setAwayScore(awayscore + 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
