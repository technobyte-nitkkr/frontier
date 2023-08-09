import React from 'react'
import './EventCard.css'

function EventCard(props) {
  return (
    <div className='eventCardContainer'>
        <div className="eventCardBody">
            <div className="eventCardImageWrapper">
                <img src={props.eventImage} alt={props.eventTitle} />
                <div className="eventCardImageBg"></div>
            </div>
        </div>
        <div className="eventCardTitleContainer">
            <div className="eventCardTitle">{props.eventTitle}</div>
        </div>
    </div>
  )
}

export default EventCard