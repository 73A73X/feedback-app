import { FaTimes } from "react-icons/fa"
import React from 'react'
import Card from './shared/Card'
import PropTypes from "prop-types"

/* This component is a feedback item, so: Card, Rating and Text */

/* This feedback item is connected to a feedback list */

function FeedbackItem({item, handleDelete}) {
    
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => handleDelete(item.id)} 
          className="close">
          <FaTimes color="purple"/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem 