import React, { useEffect, useMemo, useState } from 'react'
import {v4 as uuidv4} from "uuid"
import GridFields from './gridFields'
import colors from './colors2.json'
import Link from 'next/link'
import GridCode from './gridCode'
import IconSettingsOutline from '../icons/settings'
import ContentBox from '../pageComponents/contentBox/contentbox'
import Intro from '../pageComponents/intro/intro'
import Paragraph from '../pageComponents/paragraph'
import IconBxLinkExternal from '../icons/navigation/link'
import IconClear from '../icons/clear'
import IconReset from '../icons/reset'
import { Inter } from 'next/font/google'
import IconSoftware_layout_header_complex3 from '../icons/grid'
import IconCalendarTick from '../icons/code'
import IconSoftware_pencil from '../icons/pencil'
const inter = Inter({ subsets: ['latin'] })
import { Noto_Color_Emoji } from 'next/font/google'
import OneRem from '../pageComponents/layout/onerem'
import { generateImageUrls } from '@/app/ClientFunctions/ClientFunctions'
const noto = Noto_Color_Emoji({subsets:['emoji'],weight: ['400']})

const Grid = () => {
    const [rowNumber,setRowNumber]=useState(0)
    const [colNumber,setColNumber]=useState(0)
    const [rowGap,setRowGap]=useState(0)
    const [colGap,setColGap]=useState(0)
    const items  = useMemo(()=>{
        return Array(rowNumber*colNumber).fill(0)
    },[rowNumber,colNumber])
    //const items = Array(rowNumber*colNumber).fill(0)
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
    const [imageUrls,setImageUrls]=useState([])
    const [gridAreaDivs,setGridAreaDivs]=useState([])
    const [gridAreaClasses,setGridAreaClasses]=useState([])
     const [count,setCount]=useState(0)
    //const currentColor = colors[count+205]
    const currentColor = colors[Math.floor(Math.random()*colors.length)]
    const initialbgColors = items.map((item)=> 'var(--bg-2')
    const initialDivText = items.map((item)=>'')
    const [bgColors,setBgColors]=useState([])
    const [DivsText,setDivsText]=useState([])


    const [isMouseDown,setIsMouseDown]=useState(false)
    const [cursorType,setCursorType]=useState("grabbing")
    const [cursorType2,setCursorType2]=useState("grabbing")

    const [isGridCodeOpen,setIsGridCodeOpen]=useState(false)
    const [codeCss,setCodeCss]=useState([])
    const [codeHtml,setCodeHtml]=useState([])
   const [disableUndo,setDisableUndo]=useState(true)
    const [historyCss,setHistoryCss]=useState([])
    const [historyHtml,setHistoryHtml]=useState([])
    const [historyDivsText,setHistoryDivsText]=useState([])
    const [historybgColors,setHistorybgColors]=useState([])

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
        setDisableUndo(false)
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
            console.log(item,newbgColors)
        }
        console.log(newbgColors,'newbgcolors')
        setBgColors(newbgColors)
        let newDivText = DivsText.slice()
        newDivText[indexes[0]]=`${count}`
        setDivsText(newDivText)

        let newGridAreaDivs = [...gridAreaDivs]
        let newGridAreaClasses = gridAreaClasses.slice()
        //newGridAreaClasses.push(`<div class="item${count}"></div> \n`)
        newGridAreaClasses.push([`<`,`div `,`class`,`=`,`"item${count}"`,`>`,`</`,`div`,`> \n`])
        setGridAreaClasses(newGridAreaClasses)
        //newGridAreaDivs.push(`\n .item${count} { grid-area: ${startCoord[0]+1}/${startCoord[1]+1}/${endCoord[0]+2}/${endCoord[1]+2};}`)
        newGridAreaDivs.push([`\n .item${count} `,`{ `,`grid-area:`,`${startCoord[0]+1}/${startCoord[1]+1}/${endCoord[0]+2}/${endCoord[1]+2}`,`;`,` }`])
        setGridAreaDivs(newGridAreaDivs)

            console.log("newgridAreaDIvs🌽",newGridAreaDivs)
            console.log("newgridAreaClassses",newGridAreaClasses)
        let newImageUrls = generateImageUrls(imageUrls)
        setImageUrls(newImageUrls)
        //handle generate grid just for display 
        //handle convert to grid area string and classes as their names


        
        let newCssHistory = historyCss.slice()
        newCssHistory.push(newGridAreaDivs)
        setHistoryCss(newCssHistory)
        let newHtmlHistory = [...historyHtml]
        newHtmlHistory.push(newGridAreaClasses)
        setHistoryHtml(newHtmlHistory)
        let newbgColorsHistory = [...historybgColors]
        newbgColorsHistory.push(newbgColors)
        setHistorybgColors(newbgColorsHistory)
        let newDivTextHistory =[...historyDivsText]
        newDivTextHistory.push(newDivText)
        setHistoryDivsText(newDivTextHistory)

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
         
        let parent = [`.container `, `{ \n`,
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
        console.log(codeCss,'codeCss🧧',innerHTMLCode,'htmlcode🧧')
        setIsGridCodeOpen((prev)=>true)
        setCodeHtml(innerHTMLCode)



       }


    const handleReset = () => {
        
        setCount(0)
        //setSelectedDivs([])
        setGridAreaDivs((prev)=>[])
        setGridAreaClasses((prev)=>[])
        setBgColors(initialbgColors)
        setDivsText([...initialDivText])
       
        setHistoryCss([])
        setHistoryHtml([])
        setHistoryDivsText([])
        setHistorybgColors([])
         console.log('resetted',count,gridAreaDivs,gridAreaClasses,DivsText,initialDivText,historyCss.length,historyCss)
    }

    const handleFullReset = () =>{
        handleReset()
        setColNumber(0)
        setRowGap(0)
        setRowNumber(0)
        setColNumber(0)
        console.log(DivsText)

    }
    console.log("🥩🥩")
    const handleUndo = ()=>{
        console.log("css",historyCss.length)
        console.log("html",historyHtml,historyHtml.length)
        console.log("divtext",historyDivsText[historyDivsText.length-1],historyDivsText.length)
        if (historyCss?.length>1){
            
            historyDivsText.pop()
            historyCss.pop()
            historyHtml.pop()
            historybgColors.pop()
            let newDivText = historyDivsText[historyDivsText.length-1]
            let newGridAreaDivs = historyCss[historyCss.length-1]
            let newGridAreaClasses = historyHtml[historyHtml.length-1]
            let newbgcolors = historybgColors[historybgColors.length-1]
            setBgColors(newbgcolors)
            setGridAreaClasses(newGridAreaClasses)
            setGridAreaDivs(newGridAreaDivs)
            setDivsText(newDivText)
            setCount((prev)=>prev-1)
        }else if (historyCss?.length===1) {
            setDisableUndo(true)
            handleReset()
        }
        else{
            setDisableUndo(true)
            console.log("nothing to undo")
        }
        
    }

    useEffect(()=>{
        console.log("length changed",items?.length)
        handleReset()
        
    },[items?.length])
  return (
    <div className='grid'>
      <div className='grid-container'>
        <div className='grid-item-one' 
        // onMouseDown={()=>setCursorType2('grabbing')}
        // onMouseUp={()=>setCursorType2('grab')}
        // onMouseLeave={()=>setCursorType2('grab')}
        // style={{cursor:`${cursorType2}`}}
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
        <div className='display__grid__box'
        style={{...myGrid}}
           
        >
          {gridAreaClasses.map((item,index)=>
          (<div 
            className=''
            style={{
                backgroundImage:`url("https://picsum.photos/${imageUrls[index]}")`,
                gridArea:`${gridAreaDivs[index][3]}`}}
            key={uuidv4()}>

                <span>{gridAreaClasses[index][4]}</span>
                {/* <img
                className=''
                sizes='(100%)'
                loading='lazy'
                alt=""
                src={`https://picsum.photos/${imageUrls[index]}`}
                /> */}
            </div>)
          )}  
</div>
            {items.length===0?<span><span>Adjust the <IconSoftware_layout_header_complex3/> settings to make your grid!</span></span>:""}
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

        
       

            <div className='grid-right'>
      <div className='flex-col'>
         <div className='button-flex-200'>
        <button className={`${inter.className} light-button`} onClick={()=>handleReset()}> <IconClear/> clear grid</button>
        <button className={`${inter.className} dark-button`} onClick={()=>handleFullReset()}><IconReset/> full reset</button>
        </div>
        <div className='button-flex-200'>
        <button 
        id="UNDO__btn"
        disabled={disableUndo}
        className={`light-button ${inter.className  }`} onClick={()=>handleUndo()}>undo</button>
        <button className={`${inter.className} color-button`} onClick={()=>handleGenerateCode()}><IconSoftware_pencil/> generatecode</button>
        </div>
       
      </div>
            <OneRem/>
            
            <ContentBox>
                <div className='button-flex'>
                <span className='icon-span'><IconSettingsOutline/></span>
                <Intro>
                    <code
                    className='
                    flex items-center
                    text-[var(--cp-green)]'
                    >
                        <pre
                        className='text-[var(--cp-yellow)]'
                        >CSS </pre>
                    
                     GRID GENERATOR</code> <code className='type-span'>Settings</code>
                </Intro>
                </div>
                <Paragraph>
                    <code className='text-[var(--cp-blue)]'>
                    Use the settings below to customize your grid and then 
                    <span className='text-[var(--cp-yellow)] px-1'>generate</span> 
                    some code! See the 
                    
                    <Link href="/about" className='text-[var(--cp-red)]
                    inline-flex items-center px-0.5 gap-0
                    hover:underline
                    '>
                        about</Link> 
                        page for more details.
 
                    </code>
               </Paragraph>

               <GridFields rowGap={rowGap} colGap={colGap} rowNumber={rowNumber} colNumber={colNumber}
        setColNumber={setColNumber} setColGap={setColGap} setRowGap={setRowGap} setRowNumber={setRowNumber}
        />
            </ContentBox>


            </div>

        <div className={`grid-code-container ${isGridCodeOpen? 'open': ''}`}>
            <GridCode codeCss={codeCss} codeHtml={codeHtml} items={items} 
            setIsGridCodeOpen={setIsGridCodeOpen} 
            />
            <div 
            data-theme="dark"
            className='grid-code-blur' onClick={()=>setIsGridCodeOpen((prev)=>false)}>{codeCss[1]===undefined? 'Please make a grid': items.length===0? 'Please make a grid':''}</div>
        </div>
    </div>
  )
}

export default Grid 