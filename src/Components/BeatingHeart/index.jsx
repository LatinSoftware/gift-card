import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import './style.css'

const BeatingHeart = () => {

    return (
        <div className="beating_heart">
            <FontAwesomeIcon icon={faHeart} className="heart__icon" />
        </div>
    )
}

export { BeatingHeart }