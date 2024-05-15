import React, { forwardRef } from 'react'

const Note = forwardRef(({content,initialPos, ...props}, ref) => {
  return (
    <div 
    ref={ref}
    style={{
        position:"absolute",
        left:`${initialPos?.x}px`,
        top:`${initialPos?.y}px`,
        border:'1px solid #9c7733',
        userSelect:'none',
        cursor:'move',
        padding:'16px 24px',
        width:'200px',
        borderRadius:'10px',
        backgroundColor:'#ffbf4a'
    }}
    {...props}
    >
      📌{content}
    </div>
  )
})

export default Note
