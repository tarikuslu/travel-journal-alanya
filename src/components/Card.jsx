import React from 'react'
import mark from '../../public/mark.svg'
import '../styles/Card-style.css'
export default function Card(props) {
  return (
    <div className='card-container'>
        <div className='card-image-container'>
            <img src={props.imageUrl} alt="" />
        </div>
        <div className='card-body'>
            <p className='card-location'> <img src={mark} alt="" /> <span>{props.location}</span>   <a href={`${props.mapUrl}`} target='_blank' >View in Google Maps</a>  </p>
            <h2>{props.title} </h2>
            <p className='card-deadline'>{props.startDate} - {props.endDate} </p>
            <p className='card-desc'>
                {props.description}
            </p>
        </div>
    </div>
  )
}
