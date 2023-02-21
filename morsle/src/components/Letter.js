import React from 'react'

const Letter = ({expected, actual}) => {
  return (
    
        expected === actual ?
        <div className="letter-container" style={{backgroundColor:'green'}}>{actual}</div>
        :<div className="letter-container" style={{backgroundColor:'red'}}>{actual}</div>
    
  )
}

export default Letter