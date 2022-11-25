import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import Timer from './Components/Timer/Index';
import InicializeTimer from './Components/Timer/timer';
import { CountdownTimer } from './Components/CountdownTimer/Index';
import { TimerHeader } from './Components/TimerHeader/Index';
import { CountdownFinish } from './Components/CountdownFinish/Index';
import { BirthdayCard } from './Components/BirthdayCard/Index';

import { useVideoPlayer } from './Components/Hooks/useVideoPlayer';

import './App.css';


let bg1 = './Assets/Videos/bg2.mp4';
let bg2 = './Assets/Videos/bg3.mp4';


function App() {
  const body = document.querySelector('body');
  // const targetDate = new Date("Jan 10, 2023 00:00:00").getTime();
  const now = new Date().getTime();
  const targetDate = new Date('Wed Nov 26 2022 18:03:00');
  
  const [distance, setDistance] = useState(targetDate)
  const [step, setStep] = useState(2);
  const [runCountCownFinish, setRunCountCownFinish] = useState(false);
  const [showGift, setShowGift] = useState(false);
  const videoElement = useRef(null);
  const {
    playerState,
    handleOnTimeUpdate
  } = useVideoPlayer(videoElement);

  let secondsToFinish = Math.round(distance * 0.001);
  console.log("Segudos restantes: ", secondsToFinish)
 
  body.style.animationPlayState = runCountCownFinish ? 'running' : 'pause';

  useEffect(() => {
    console.log("rendered first time");
    const distanceToBirthday = Math.round((targetDate - now) * 0.001);
    if(distanceToBirthday > 0 && step === 1){
        InicializeTimer(targetDate, setDistance);
    }
  }, [])

  useEffect(() => {
      console.log("rendered when distance and second to finish");
      if(secondsToFinish !== 30)
          return;
      setStep(2);
    
  }, [secondsToFinish])

  useEffect(() => {
    
    if(step === 2) {
      var boxBg = document.querySelector('.box');
      gsap.to(boxBg, {
        scale: 25,
        duration: 5, 
        ease: "circ.out", 
        backgroundColor: 'white',
        onComplete: () =>{
          setStep(3);
          setRunCountCownFinish(true);
  
        }
      })
    }

    if(step === 3){
      body.addEventListener("webkitAnimationEnd", () => {
        setRunCountCownFinish(false);
        setStep(4);
      });
    }

  }, [step, body]);



  return (
    <div className="App">
      {step === 1 && 
        <React.Fragment>
          <video autoPlay={true} 
                loop={playerState.loop} 
                muted={playerState.isMuted} 
                ref={videoElement}
                className='video' >
            <source src={bg1} type='video/mp4' />
          </video>
          <CountdownTimer 
            timerHeader = <TimerHeader/>
            timerClock = <Timer/>
          /> 
        </React.Fragment>
      }

    {step === 2 && <div className='box'  />}
    {step === 3 && <CountdownFinish  /> }
    {step === 4 && 
      <video autoPlay={true} 
                loop={playerState.loop} 
                muted={playerState.isMuted} 
                ref={videoElement}
                onTimeUpdate={handleOnTimeUpdate} 
                className='video' >
            <source src={bg2} type='video/mp4' />
        </video>
     }
    {showGift && 
      <div className='BirthdayCard__container'>
        <BirthdayCard />
      </div> 
    } 
      
    </div>
  );
}

export default App;
