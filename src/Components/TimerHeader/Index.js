import React from 'react'
import './style.css';

const TimerHeader = () => {

    const title = 'celebration icon';
    const img = './Assets/Images/icon1.svg';
    const crownImg = './Assets/Images/crown.png';
    const crownTitle = 'corona de princesa';
    return (
        <div className='TimerHeader'>
            <img src={crownImg} alt={crownTitle} title={crownTitle} className="crown" />
            <span>Frey's Birthday</span>
            <img src={img} alt={title} title={title} />
        </div>
    )
}

export { TimerHeader }