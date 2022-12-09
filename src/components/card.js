import React from 'react'
import * as cardStyles from "./card.module.css"

const Card = props => {
    <div classsname={cardStyles.Card}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>

}
export default Card