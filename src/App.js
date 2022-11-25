import React from 'react';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import Timer from './Components/Timer/Index';
import InicializeTimer from './Components/Timer/timer';
import { CountdownTimer } from './Components/CountdownTimer/Index';
import { TimerHeader } from './Components/TimerHeader/Index';
import { CountdownFinish } from './Components/CountdownFinish/Index';
import { BirthdayCard } from './Components/BirthdayCard/Index';

import './App.css';
import { VideoPlayer } from './Components/VideoPlayer';


let bg1 = './Assets/Videos/bg2.mp4';
let bg2 = './Assets/Videos/bg3.mp4';
let bg4 = './Assets/Videos/bg4.mp4';


function App() {
  const body = document.querySelector('body');
  const now = new Date().getTime();
  const targetDate = new Date('Jan 10 2023 00:00:00');

  const [distance, setDistance] = useState()
  const [step, setStep] = useState(1);
  const [runCountCownFinish, setRunCountCownFinish] = useState(false);
  const [showGift, setShowGift] = useState(false);


  let secondsToFinish = Math.round(distance * 0.001);
  console.log("Segudos restantes: ", secondsToFinish)

  body.style.animationPlayState = runCountCownFinish ? 'running' : 'pause';

  useEffect(() => {
    const distanceToBirthday = Math.round((targetDate - now) * 0.001);
    console.log("rendered first time", distanceToBirthday);
    if (distanceToBirthday > 0 && step === 1) {
      InicializeTimer(targetDate, setDistance);
    }else{
      setStep(2);
    }
  }, [])

  useEffect(() => {
    if (secondsToFinish !== 24)
      return;
    setStep(2);

  }, [secondsToFinish])

  useEffect(() => {

    if (step === 2) {
      var boxBg = document.querySelector('.box');
      gsap.to(boxBg, {
        scale: 25,
        duration: 5,
        ease: "circ.out",
        backgroundColor: 'white',
        onComplete: () => {
          setStep(3);
          setRunCountCownFinish(true);
        }
      })
    }

    if (step === 3) {
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
          <VideoPlayer video={bg1} showGift={showGift} setShowGift={setShowGift} />
          <CountdownTimer
            timerHeader=<TimerHeader />
            timerClock=<Timer />
          />
        </React.Fragment>
      }

      {step === 2 && <div className='box' />}
      {step === 3 && <CountdownFinish />}
      {step === 4 && <VideoPlayer video={bg2} showGift={showGift} setShowGift={setShowGift} hasToShowGift={true} /> }
      {showGift && step === 4 &&
        <div className='BirthdayCard__container'>
          <BirthdayCard setStep={setStep} />
        </div>
      }

    {step === 5 && <VideoPlayer video={bg4} showGift={showGift} setShowGift={setShowGift} /> }

    </div>
  );
}

export default App;
