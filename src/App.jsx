import { useEffect, useState, useCallback } from 'react'
import './App.css'
import Home from './components/home';
import AnimatedCursor from 'react-animated-cursor'
import { loadFull } from "tsparticles";
import About from './components/About';
import p1 from './assets/img/profile-img.jpg'
import Projects from './components/Projects';



function App() {
  const [dark, setDark] = useState(true)
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
      <Projects />

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
          mixBlendMode:'exclusion'
        }}
      />
      <div className='flex gap-10 mt-10 justify-center items-center'>
      </div>
    </>
  )
}

export default App
