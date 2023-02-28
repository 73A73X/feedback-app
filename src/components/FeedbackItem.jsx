import React from 'react'
import { useState } from 'react'

/* This component is a feedback item, so: Card, Rating and Text */

/* This feedback item is connected to a feedback list */

function FeedbackItem({item}) {
    return (
    <div className='card'>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
    </div>
  )
}

export default FeedbackItem