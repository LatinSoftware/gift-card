import React from 'react'
import './style.css';
import img from '../../Assets/Images/icon1.svg';
import crownImg from '../../Assets/Images/crown.png';

const TimerHeader = () => {

    const title = 'celebration icon';
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