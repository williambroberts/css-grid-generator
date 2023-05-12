import React from 'react'
import {v4 as uuidv4} from "uuid"
const GridCode = ({codeCss,codeHtml}) => {
    if (codeCss=[]){
        return null
    }
  return (
    <div className='grid-code'>
        {code[0]} <br/>
        {code[1].map((item)=> (<span  key={uuidv4()}>{item}<br/></span>) )}
    </div>
  )
}

export default GridCode