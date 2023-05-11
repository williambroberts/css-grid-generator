import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from "uuid"
import GridFields from './gridFields'

const Grid = () => {
    const [rowNumber,setRowNumber]=useState(0)
    const [colNumber,setColNumber]=useState(0)
    const [rowGap,setRowGap]=useState(0)
    const [colGap,setColGap]=useState(0)
    
    const items = Array(rowNumber*colNumber).fill(0)
    const therows = Array(Number(rowNumber)).fill("1fr")
    const thecolumns = Array(Number(colNumber)).fill("1fr")

    const [rows,setRows]=useState([])
    const [cols,setCols]=useState([])

    const divs = items.map((val,index)=>index+1)

    
    const [isMouseDown,setIsMouseDown]=useState(false)
    useEffect(()=>{
        setRows(therows)
    },[therows.length])

    useEffect(()=>{
        setCols(thecolumns)
    },[thecolumns.length])

    let colStr = ""
    for (let col of cols) {
        colStr += col + " "
    }

    let rowsStr =""
    for (let row of rows) {
        rowsStr+= row+ " "
    }
    // console.log(rows,therows,rowNumber,rowsStr)
    
    const myGrid = {
        // gridTemplateColumns  :`repeat(${colNumber},1fr)`,
        // gridTemplateRows :`repeat(${rowNumber},1fr)`,
        gridTemplateColumns:`${colStr}`,
        gridTemplateRows:`${rowsStr}`,
        rowGap:`${rowGap}px`,
        columnGap: `${colGap}px`,
       

    }
    const myGridTwo = {
        gridTemplateColumns:`${colStr}`,
        columnGap: `${colGap}px`,
        gridTemplateRows: "1fr"
    }
    const myGridThree = {
        gridTemplateColumns: "1fr",
        rowGap:`${rowGap}px`,
        gridTemplateRows: `${rowsStr}`

    }
    const handleSetCols = (e,index) => {
        e.preventDefault()
        let newCols = [...cols]
        let myInput = document.getElementById(`col-input${index}`)

        newCols[index]=myInput.value
        setCols(newCols)
       
    }
    const handleSetRows = (e,index) => {
        e.preventDefault()
        let newRows = [...rows]
        let myInput = document.getElementById(`row-input${index}`)

        newRows[index]=myInput.value
        setRows(newRows)
        
    }

    const handleMouseEnter = (index)=>{
        
        let myDiv = document.getElementsByClassName(`grid-item-main${index}`)[0].style.backgroundColor ="green"
        console.log("entered")
        
    }

    const handleMouseLeave = (index)=> {
        console.log("left")
    }
    const handleMouseUp = (index)=>{
        setIsMouseDown((prev)=>!prev)
        console.log(isMouseDown)
        document.getElementsByClassName(`grid-item-main${index}`)[0].style.cursor="pointer"
    }
    const handleMouseDown = (index) => {
        setIsMouseDown((prev)=>!prev)
        console.log(isMouseDown)
        document.getElementsByClassName(`grid-item-main${index}`)[0].style.cursor="grabbing"
    }
  return (
    <div className='grid'>
      <div className='grid-container'>
        <div className='grid-item-one'></div>
        <div className='grid-item-two' style={{...myGridTwo}}>
        {cols.map((col,index)=>
            <form className="input-col-item" onSubmit={(e)=>handleSetCols(e,index)}>
                <input id={`col-input${index}`} placeholder={`${col}`}
            type="text" key={uuidv4()} 
           
            
            />
            </form>
            )}

        </div>
        <div className='grid-item-three' style={{...myGridThree}} >
        {rows.map((row,index)=>
            <form className="input-row-item" onSubmit={(e)=>handleSetRows(e,index)}>
                <input id={`row-input${index}`} placeholder={`${row}`}
            type="text" key={uuidv4()} 
           
            
            />
            </form>
            )}
        </div>

        <div className='grid-box' style={{...myGrid}}>
            
           {items.map((item,index)=>
           <div key={uuidv4()}
            className={`grid-item-main${index}`}

            onMouseDown={()=>handleMouseDown(index)}
            onMouseUp={()=>handleMouseUp(index)}
            onMouseLeave={()=>handleMouseLeave(index)}
             onMouseEnter={()=>handleMouseEnter(index)}
             style={{}}
             >
             {/* r:{Math.floor(index/colNumber)}<br/> */}
             {/* c:{index%colNumber}<br/> */}
             i:{index}
             </div>
             
           )}

            </div>
           
          
        </div>

        row gap{rowGap} col gap {colGap}
        <GridFields rowGap={rowGap} colGap={colGap} rowNumber={rowNumber} colNumber={colNumber}
        setColNumber={setColNumber} setColGap={setColGap} setRowGap={setRowGap} setRowNumber={setRowNumber}
        />
    </div>
  )
}

export default Grid