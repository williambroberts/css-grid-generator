import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from "uuid"
import GridFields from './gridFields'
import colors from './colors.json'
const Grid = () => {
    const [rowNumber,setRowNumber]=useState(0)
    const [colNumber,setColNumber]=useState(0)
    const [rowGap,setRowGap]=useState(0)
    const [colGap,setColGap]=useState(0)
    
    const items = Array(rowNumber*colNumber).fill(0)
    const therows = Array(Number(rowNumber)).fill("1fr")
    const thecolumns = Array(Number(colNumber)).fill("1fr")
    
    const [selectedDivs,setSelectedDivs]=useState([])



    const [rows,setRows]=useState([])
    const [cols,setCols]=useState([])
    //let hexNum = () => {return Math.round((Math.random()*1000000)+1) }
    const divs = items.map((val,index)=>index+1)
    const [start,setStart]=useState(0)
   const [end,setEnd]=useState(0)


    console.log(start,end,'yes')

    const [count,setCount]=useState(0)
    const currentColor = colors[count]



    
    const [isMouseDown,setIsMouseDown]=useState(false)
    const [cursorType,setCursorType]=useState("grabbing")

    
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
        if (isMouseDown) {
            console.log(`entered ${index}, AND MOUSE DOWN!,${selectedDivs}`)
            let Divs = selectedDivs.slice()
             if (!Divs.includes(index)) {
                Divs.push(index)
                console.log(Divs,'Divs')
             }
           
            setSelectedDivs(Divs)
            console.log(selectedDivs,typeof(selectedDivs))

        }
       
        console.log("entered")
        
        
    }

    const handleMouseLeave = (index)=> {
        console.log("left")
       
    }
    const handleMouseUp = (index,e)=>{
        setIsMouseDown((prev)=>false)
        console.log(isMouseDown,"mouse is up",index,selectedDivs,'selectedDvs')
        setSelectedDivs([])
        setEnd(index)
        setCursorType('grab')
           
       
        

        
    }
    const handleMouseDown = (index,e) => {
        setIsMouseDown((prev)=>true)
        console.log(isMouseDown,"mouse down",index)
        setStart(index)
        setCursorType('grabbing')
        setCount((prev)=>prev+1)

        let Divs = selectedDivs.slice()
             if (!Divs.includes(index)) {
                Divs.push(index)
                console.log(Divs,'Divs')
             }
           
            setSelectedDivs(Divs)
            console.log(selectedDivs,typeof(selectedDivs))
        
       }
       
    
  return (
    <div className='grid'>
      <div className='grid-container'>
        <div className='grid-item-one' 
        onMouseDown={()=>setCursorType('grabbing')}
        onMouseUp={()=>setCursorType('grab')}
        onMouseLeave={()=>setCursorType('grab')}
        style={{cursor:`${cursorType}`}}
        ></div>
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
            id={`grid-item-main${index}`}
            className='grid-item-main'
            onMouseDown={(e)=>handleMouseDown(index,e)}
            onMouseUp={(e)=>handleMouseUp(index,e)}
            onMouseLeave={()=>handleMouseLeave(index)}
             onMouseEnter={()=>handleMouseEnter(index)}
             style={{cursor:`${cursorType}`}}   
             >
             {/* r:{Math.floor(index/colNumber)}<br/> */}
             {/* c:{index%colNumber}<br/> */}
             i:{index}
             </div>
             
           )}
           
            {/* <style>
                {`.grid-item-main {
                    cursor:${cursorType}
                }`}
            </style> */}


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