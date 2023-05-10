"use client"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import IconBxMoon from '../icons/themeIcons/moon'
import IconSun from '../icons/themeIcons/sun'
IconSun
const ThemeButton = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  //useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button className={`theme-button ${theme==="light"? "light":"dark"}`} onClick={()=>setTheme(theme==="light"?"dark":"light")}>
      {theme==="dark"?   <IconSun />: <IconBxMoon />}
      </button>
      
  )
}

export default ThemeButton


// {`${theme==='light'? "☽"
// :"☀"}`}