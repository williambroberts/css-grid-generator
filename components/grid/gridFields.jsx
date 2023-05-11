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
            </fieldset>
            <fieldset>
                <label htmlFor='col-input'>
                    Columns
                </label>
                    <input type="number" min="0" max="12" name="col-input" id="col-input"
                     value={colNumber} onChange={(e)=>setColNumber(e.target.value)}
                    />
            </fieldset>
            <fieldset>
                <label htmlFor='row-gap'>
                    Row Gap
                </label>
                    <input type="number" min="0" max="100" name="row-gap" id="row-gap"
                     value={rowGap} onChange={(e)=>setRowGap(e.target.value)}
                    />
            </fieldset>
            <fieldset>
                <label htmlFor='col-gap'>
                    Column Gap
                </label>
                    <input type="number" min="0" max="100" name="col-gap" id="col-gap"
                     value={colGap} onChange={(e)=>setColGap(e.target.value)}
                    />
            </fieldset>
    </div>
  )
}

export default GridFields