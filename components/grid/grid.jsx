import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from "uuid"
import GridFields from './gridFields'
import colors from './colors2.json'

import GridCode from './gridCode'
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

    const [gridAreaDivs,setGridAreaDivs]=useState([])
    const [gridAreaClasses,setGridAreaClasses]=useState([])
     const [count,setCount]=useState(0)
    //const currentColor = colors[count+205]
    const currentColor = colors[Math.floor(Math.random()*colors.length)]
    const initialbgColors = items.map((item)=> '#FFFFFF')
    const initialDivText = items.map((item)=>'')
    const [bgColors,setBgColors]=useState([])
    const [DivsText,setDivsText]=useState([])


    const [isMouseDown,setIsMouseDown]=useState(false)
    const [cursorType,setCursorType]=useState("grabbing")
    const [cursorType2,setCursorType2]=useState("grabbing")

    const [isGridCodeOpen,setIsGridCodeOpen]=useState(false)
    const [codeCss,setCodeCss]=useState([])
    const [codeHtml,setCodeHtml]=useState([])
   
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

    useEffect(()=>{
        document.querySelector('html').style.overflowY= isGridCodeOpen? 'hidden':'scroll'
       
    },[isGridCodeOpen])

   



    

    
    useEffect(()=>{
        setRows(therows)
    },[therows.length])

    useEffect(()=>{
        setCols(thecolumns)
    },[thecolumns.length])

    useEffect(()=>{
        setBgColors(initialbgColors)
    },[initialbgColors.length])
    useEffect(()=>{
        setDivsText(initialDivText)
    },[initialDivText.length])



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
        console.log(indexes,'real indexes',count,'div number (count)')

        indexes.forEach((item)=> 
           // console.log(document.getElementById(`grid-item-main${item}`).style.backgroundColor),
            console.log(bgColors[item],currentColor,item)
            //document.getElementById(`grid-item-main${item}`).style.backgroundColor = currentColor
        )
        let newbgColors = bgColors.slice()
        for (let item of indexes){
            
            newbgColors[item]=currentColor
            //console.log(item,newbgColors)
        }
       // console.log(newbgColors,'newbgcolors')
        setBgColors(newbgColors)
        let newDivText = DivsText.slice()
        newDivText[indexes[0]]=`${count}`
        setDivsText(newDivText)

        let newGridAreaDivs = gridAreaDivs
        let newGridAreaClasses = gridAreaClasses.slice()
        //newGridAreaClasses.push(`<div class="item${count}"></div> \n`)
        newGridAreaClasses.push([`<`,`div `,`class`,`=`,`"item${count}"`,`>`,`</`,`div`,`> \n`])
        setGridAreaClasses(newGridAreaClasses)
        //newGridAreaDivs.push(`\n .item${count} { grid-area: ${startCoord[0]+1}/${startCoord[1]+1}/${endCoord[0]+2}/${endCoord[1]+2};}`)
        newGridAreaDivs.push([`\n .item{count}`,`{`,`grid-area:`,`${startCoord[0]+1}/${startCoord[1]+1}/${endCoord[0]+2}/${endCoord[1]+2}`,`;`,`}`])
        setGridAreaDivs(newGridAreaDivs)




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
        console.log(selectedDivs,typeof(selectedDivs),'here will')
            
       }
       

       const handleGenerateCode = () => {
        // let parent = `.container {
        //     display: grid;
        //     grid-template-columns: ${myGrid.gridTemplateColumns};
        //     grid-template-rows: ${myGrid.gridTemplateRows};
        //     column-gap:${myGrid.columnGap};
        //     row-gap: ${myGrid.rowGap};  
        // }`  
        let parent = [`.container`, `{ \n`,
        ` display`,`:`, `grid`,`; \n`,
        `grid-template-columns`,`:`, `${myGrid.gridTemplateColumns}`,`; \n`,
       ` grid-template-rows`,`:`, `${myGrid.gridTemplateRows}`,`; \n`,
        `column-gap`,`:`,`${myGrid.columnGap}`,`; \n`,
       ` row-gap`,`:`, `${myGrid.rowGap}`,`; \n `,
       `}`
        ]
        let innerHTMLCode = [[`<`,`div `, `class`,`=`,`"parent"`,`> \n`]]
       gridAreaClasses.forEach((item)=> innerHTMLCode.push(item))
       innerHTMLCode.push([`</`,`div`,`>`])
        



           
        let codeCss = [parent,gridAreaDivs]
        setCodeCss(codeCss)
        console.log(codeCss,'codeCss',innerHTMLCode,'htmlcode')
        setIsGridCodeOpen((prev)=>true)
        setCodeHtml(innerHTMLCode)



       }


    const handleReset = () => {
        
        setCount(0)
        //setSelectedDivs([])
        setGridAreaDivs((prev)=>[])
        setGridAreaClasses((prev)=>[])
        setBgColors(initialbgColors)
        console.log('resetted',count,gridAreaDivs,gridAreaClasses)
    }

    const handleFullReset = () =>{
        handleReset()
        setColNumber(0)
        setRowGap(0)
        setRowNumber(0)
        setColNumber(0)

    }
  return (
    <div className='grid'>
      <div className='grid-container'>
        <div className='grid-item-one' 
        onMouseDown={()=>setCursorType2('grabbing')}
        onMouseUp={()=>setCursorType2('grab')}
        onMouseLeave={()=>setCursorType2('grab')}
        style={{cursor:`${cursorType2}`}}
        ></div>
        <div className='grid-item-two' style={{...myGridTwo}}>
        {cols.map((col,index)=>
            <form key={uuidv4()}
            className="input-col-item" onSubmit={(e)=>handleSetCols(e,index)}>
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
            <form key={uuidv4()}
            className="input-row-item" onSubmit={(e)=>handleSetRows(e,index)}>
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
             style={{cursor:`${cursorType}`,backgroundColor:`${bgColors[index]}`}}   
             >
             {/* r:{Math.floor(index/colNumber)}<br/> */}
             {/* c:{index%colNumber}<br/> */}
             {DivsText[index]}
             </div>
             
           )}
           
           


            </div>
           
          
        </div>

        
        <GridFields rowGap={rowGap} colGap={colGap} rowNumber={rowNumber} colNumber={colNumber}
        setColNumber={setColNumber} setColGap={setColGap} setRowGap={setRowGap} setRowNumber={setRowNumber}
        />
        
        <button onClick={()=>handleReset()}>clear grid</button>
        <button onClick={()=>handleGenerateCode()}>generate code</button>
        <button onClick={()=>handleFullReset()}>full reset</button>

        <div className={`grid-code-container ${isGridCodeOpen? 'open': ''}`}>
            <GridCode codeCss={codeCss} codeHtml={codeHtml} items={items}/>
            <div className='grid-code-blur' onClick={()=>setIsGridCodeOpen((prev)=>false)}>{codeCss[1]===undefined? 'Please make a grid': items.length===0? 'Please make a grid':''}</div>
        </div>
    </div>
  )
}

export default Grid