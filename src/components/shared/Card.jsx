import React from 'react'
import PropTypes from "prop-types";


function Card({children, reverse}) {
  /*return (
    // This is a example of an conditional class
    <div className={`card ${reverse && "reverse" }`}>{children}</div>
  ) */


  // example of an conditional styling
  return (
    <div 
        className='card' 
        style={{
            backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff", 
            color: reverse ? "#fff" : "#000",
        }}
    >
        {children}
    </div>
  )
}

Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}
export default Card