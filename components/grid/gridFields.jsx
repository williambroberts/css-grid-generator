"use client"
import React from 'react'
import { Inter } from 'next/font/google'
import IconTool from '../icons/spanner'
const inter = Inter({ subsets: ['latin'] })

const GridFields = ({setColGap,colGap,setColNumber,colNumber,setRowGap,rowGap,setRowNumber,rowNumber}) => {


  return (
    <div className='grid-fields'>
     <fieldset>
                <label htmlFor='row-input'>
                   <span className='fieldset-text'>
                    <IconTool/> <code className='text-[var(--cp-purple)]'>Rows</code>
                    </span> 
                </label>
                    <input type="number" min="0" max="12" name="row-input" id="row-input"
                     value={rowNumber} onChange={(e)=>setRowNumber(e.target.value)}
                    />
                    <button className='grid-field-button' onClick={()=>setRowNumber((prev)=>prev===12? prev:prev+1)}>+</button>
                    <button className='grid-field-button' onClick={()=>setRowNumber((prev)=>prev===0? prev: prev-1)}>-</button>
            </fieldset>
            <fieldset>
                <label htmlFor='col-input'>
                <span className='fieldset-text'><IconTool/> 
                <code className='text-[var(--cp-purple)]'>Columns</code>
                </span> 
                </label>
                    <input type="number" min="0" max="12" name="col-input" id="col-input"
                     value={colNumber} onChange={(e)=>setColNumber(e.target.value)}
                    />
                    <button className='grid-field-button' onClick={()=>setColNumber((prev)=> prev===12? prev:prev+1)}>+</button>
                    <button className='grid-field-button' onClick={()=>setColNumber((prev)=>prev===0? prev: prev-1)}>-</button>
            </fieldset>
            <fieldset>
                <label htmlFor='row-gap'>
                <span className='fieldset-text'><IconTool/> 
                <code className='text-[var(--cp-purple)]'>Row Gap</code>

                <span className='text-[var(--cp-red)]'>(px)</span>
                 </span> 
                    
                </label>
                    <input type="number" min="0" max="100" name="row-gap" id="row-gap"
                     value={rowGap} onChange={(e)=>setRowGap(e.target.value)}
                    />
                    <button className='grid-field-button' onClick={()=>setRowGap((prev)=>prev+1)}>+</button>
                    <button className='grid-field-button' onClick={()=>setRowGap((prev)=>prev-1)}>-</button>
            </fieldset>
            <fieldset>
                <label htmlFor='col-gap'>
                <span className='fieldset-text'><IconTool/> 
                <code className='text-[var(--cp-purple)]'>Column Gap</code>

                <span className='text-[var(--cp-red)]'>(px)</span>
                 </span> 
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