"use client"
import React from 'react'

const GridFields = ({setColGap,colGap,setColNumber,colNumber,setRowGap,rowGap,setRowNumber,rowNumber}) => {
  return (
    <div className='grid-fields'>
     <fieldset>
                <label htmlFor='row-input'>
                    Rows
                </label>
                    <input type="number" min="0" max="12" name="row-input" id="row-input"
                     value={rowNumber} onChange={(e)=>setRowNumber(e.target.value)}
                    />
                    <button className='grid-field-button' onClick={()=>setRowNumber((prev)=>prev+1)}>+</button>
                    <button className='grid-field-button' onClick={()=>setRowNumber((prev)=>prev-1)}>-</button>
            </fieldset>
            <fieldset>
                <label htmlFor='col-input'>
                    Columns
                </label>
                    <input type="number" min="0" max="12" name="col-input" id="col-input"
                     value={colNumber} onChange={(e)=>setColNumber(e.target.value)}
                    />
                    <button className='grid-field-button' onClick={()=>setColNumber((prev)=>prev+1)}>+</button>
                    <button className='grid-field-button' onClick={()=>setColNumber((prev)=>prev-1)}>-</button>
            </fieldset>
            <fieldset>
                <label htmlFor='row-gap'>
                    Row Gap
                </label>
                    <input type="number" min="0" max="100" name="row-gap" id="row-gap"
                     value={rowGap} onChange={(e)=>setRowGap(e.target.value)}
                    />
                    <button className='grid-field-button' onClick={()=>setRowGap((prev)=>prev+1)}>+</button>
                    <button className='grid-field-button' onClick={()=>setRowGap((prev)=>prev-1)}>-</button>
            </fieldset>
            <fieldset>
                <label htmlFor='col-gap'>
                    Column Gap
                </label>
                    <input type="number" min="0" max="100" name="col-gap" id="col-gap"
                     value={colGap} onChange={(e)=>setColGap(e.target.value)}
                    />
                    <button className='grid-field-button' onClick={()=>setColGap((prev)=>prev+1)}>+</button>
                    <button className='grid-field-button' onClick={()=>setColGap((prev)=>prev-1)}>-</button>
            </fieldset>
    </div>
  )
}

export default GridFields