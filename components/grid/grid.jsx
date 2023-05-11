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
    const [isInputFocusedRow,setIsInputFocusedRow]=useState(-1)
    const [isInputFocusedCol,setIsInputFocusedCol]=useState(-1)

    const [rows,setRows]=useState([])
    const [cols,setCols]=useState([])
    //let hexNum = () => {return Math.round((Math.random()*1000000)+1) }
    const divs = items.map((val,index)=>index+1)
    const [start,setStart]=useState(0)
    const [end,setEnd]=useState(0)

    const startCoord = [Math.floor(selectedDivs[0]/colNumber),(selectedDivs[0]%colNumber)]
    const endCoord = [Math.floor(selectedDivs[selectedDivs.length-1]/colNumber),(selectedDivs[selectedDivs.length-1]%colNumber)]
    const realSelctedDivs = []

    const getCoordinates = (start, end) => {
        const coordinates = [];
        const rows = Math.abs(end[0] - start[0]) + 1;
        const cols = Math.abs(end[1] - start[1]) + 1;
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            const row = start[0] < end[0] ? start[0] + i : start[0] - i;
            const col = start[1] < end[1] ? start[1] + j : start[1] - j;
            coordinates.push([row, col]);
          }
        }
        return coordinates;
      }

    

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
        setIsInputFocusedCol(-1)
        let newCols = [...cols]
        let myInput = document.getElementById(`col-input${index}`)

        newCols[index]=myInput.value
        setCols(newCols)
       
    }
    const handleSetRows = (e,index) => {
        e.preventDefault()
        setIsInputFocusedRow(-1)
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
       
       // console.log("entered")
        
        
    }

    const handleMouseLeave = (index)=> {
        //console.log("left")
       
    }
    const handleMouseUp = (index,e)=>{
        setIsMouseDown((prev)=>false)
        console.log(isMouseDown,"mouse is up",index,selectedDivs,'selectedDvs')
        setSelectedDivs([])
        setEnd(index)
        setCursorType('grab')


        console.log(startCoord,endCoord,"start end")   
        const myCoordinates = getCoordinates(startCoord,endCoord)
        const indexes = []
        myCoordinates.forEach((item)=> indexes.push(item[0]*colNumber+item[1]) )
        console.log(indexes,'real indexes')
        indexes.forEach((item)=> 
            console.log( document.getElementById(`grid-item-main${index}`).style.backgroundColor),

            document.getElementById(`grid-item-main${index}`).style.backgroundColor = currentColor
        )
        
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
       
    const handleReset = () => {
        console.log('resetted')
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
                <input id={`col-input${index}`} placeholder={isInputFocusedCol===index? '':`${col}`}
                onFocus={()=>setIsInputFocusedCol(index)}
                onBlur={()=>setIsInputFocusedCol(-1)}
            type="text" key={uuidv4()} 
           
            
            />
            </form>
            )}

        </div>
        <div className='grid-item-three' style={{...myGridThree}} >
        {rows.map((row,index)=>
            <form className="input-row-item" onSubmit={(e)=>handleSetRows(e,index)}>
                <input id={`row-input${index}`} placeholder={isInputFocusedRow===index? '':`${row}`}
                onFocus={()=>setIsInputFocusedRow(index)}
                onBlur={()=>setIsInputFocusedRow(-1)}
            type="text" key={uuidv4()} 
           
            
            />
            </form>
            )}
        </div>

        <div className='grid-box' style={{...myGrid}}>
            
           {items.map((item,index)=>
           <div key={uuidv4()}
            id={`grid-item-main${index}`}
            className={`grid-item-main${index}`}
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
        <button onClick={()=>handleReset()}>reset grid</button>
    </div>
  )
}

export default Grid