import "./TagButtonStyle.css"
import React from 'react'

function TagButtonComponent({title,children }) {
  return (
    <div>
        <button className="tagButton">
          {title} 
          {children}
          
        </button>
    </div>
  )
}

export default TagButtonComponent