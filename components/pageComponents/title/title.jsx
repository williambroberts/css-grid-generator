import React,{memo} from 'react'

const Title = ({name}) => {
  const colors = ["var(--cp-purple)","var(--cp-red)"]
  const nameArray = name.split(" ")
  return (
    <h1 className='title'>

      {nameArray.map((word,index)=>
      <code 
      key={word+index}
      style={{color:colors[index]}} >
         {word}
         {index===0? (<span className='text-white whitespace-pre'>:</span>):""}
        </code>
      
      )}
      
    
    
    <span className='text-white'>;</span>
    </h1>
  )
}

export default memo(Title)