import React from 'react'
import "./EventCard.css"

const EventCard = ({
    imglink,
    title,
    subtitle,
    info,
    btnbody
}) => {
    return (
        <div className='hlo'>
            <div className='card'>
                <img src={imglink} alt="" className='card-img'></img>
                <div className='card-body'>
                    <h1 className='card-title'>
                        {title}
                    </h1>
                    <p className='card-sub-title'>
                        {subtitle}
                    </p>
                    <p className='card-info'>
                        {info}
                    </p>
                    <button class="card-btn">
                        {btnbody}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EventCard
