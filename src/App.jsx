import { useEffect, useState, useCallback } from 'react'
import './App.css'
import Home from './components/home';
import Particles from "react-particles";
import AnimatedCursor from 'react-animated-cursor'
import { loadFull } from "tsparticles";
import About from './components/About';


function App() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [dark])



  return (
    <>
      <Home />
      <button onClick={() => { setDark(!dark) }} className='dark:bg-white bg-black dark:text-black text-white w-9 h-9 rounded-full fixed left-1 top-1'>x</button>
      <About />
      <AnimatedCursor
        color="222,53,12"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0.3}
        outerStyle={{
          mixBlendMode: 'exclusion'
        }}
      />
    </>
  )
}

export default App
