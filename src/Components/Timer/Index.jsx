import React from 'react';
import './style.css';



const Timer = () => {

    return (
        <div className="countdown">
            <div className="bloc-time days">
                <span className="count-title">Days</span>
                <div className='figure__container'>
                    <div className="figure days days-1">
                        <span className="top">0</span>
                        <span className="top-back">
                            <span>0</span>
                        </span>
                        <span className="bottom">0</span>
                        <span className="bottom-back">
                            <span>2</span>
                        </span>
                    </div>
                    <div className="figure days days-2">
                        <span className="top">0</span>
                        <span className="top-back">
                            <span>4</span>
                        </span>
                        <span className="bottom">0</span>
                        <span className="bottom-back">
                            <span>4</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="bloc-time hours">
                <span className="count-title">Hours</span>
                <div className='figure__container'>
                    <div className="figure hours hours-1">
                        <span className="top">0</span>
                        <span className="top-back">
                            <span>2</span>
                        </span>
                        <span className="bottom">0</span>
                        <span className="bottom-back">
                            <span>2</span>
                        </span>
                    </div>
                    <div className="figure hours hours-2">
                        <span className="top">0</span>
                        <span className="top-back">
                            <span>4</span>
                        </span>
                        <span className="bottom">0</span>
                        <span className="bottom-back">
                            <span>4</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="bloc-time min">
                <span className="count-title">Minutes</span>
                <div className='figure__container'>
                    <div className="figure min min-1">
                        <span className="top">0</span>
                        <span className="top-back">
                            <span>0</span>
                        </span>
                        <span className="bottom">0</span>
                        <span className="bottom-back">
                            <span>0</span>
                        </span>
                    </div>
                    <div className="figure min min-2">
                        <span className="top">0</span>
                        <span className="top-back">
                            <span>0</span>
                        </span>
                        <span className="bottom">0</span>
                        <span className="bottom-back">
                            <span>0</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="bloc-time sec">
                <span className="count-title">Seconds</span>
                <div className='figure__container'>
                    <div className="figure sec sec-1">
                        <span className="top">0</span>
                        <span className="top-back">
                            <span>0</span>
                        </span>
                        <span className="bottom">0</span>
                        <span className="bottom-back">
                            <span>0</span>
                        </span>
                    </div>
                    <div className="figure sec sec-2">
                        <span className="top">0</span>
                        <span className="top-back">
                            <span>0</span>
                        </span>
                        <span className="bottom">0</span>
                        <span className="bottom-back">
                            <span>0</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Timer;