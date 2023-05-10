import React, { useState } from 'react'

const Grid = () => {
    const [rowNumber,setRowNumber]=useState(0)
    const [colNumber,setColNumber]=useState(0)
    const [rowGap,setRowGap]=useState(0)
    const [colGap,setColGap]=useState(0)

  return (
    <div className='grid'>
        <div className='grid-item'>
            {colNumber} {rowNumber}
        </div>
        <div className='grid-settings'>
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
    </div>
  )
}

export default Grid