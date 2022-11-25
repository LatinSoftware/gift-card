import React from 'react';
import './index.css';

const CountdownTimer = ({timerHeader, timerClock}) => {

    return (
        <div className='CountdownTimer'>
            {timerHeader}
            <div>
                {timerClock}
            </div>
        </div>
    )
}

export {CountdownTimer}