import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home';
import Footer from './components/footer';
// import Navbar from './components/Navbar';
import NavigationBar from './components/NavigationBar';
import { Route, Routes } from 'react-router-dom';
import Blogs from './pages/Blogs';
import SingleBlogs from './pages/SingleBlogs';



function App() {
  const storedDarkMode = localStorage.getItem('darkMode');
  const initialDarkMode = storedDarkMode === 'true';
  const [dark, setDark] = useState(initialDarkMode);
  
  useEffect(() => {
    if (dark) {
      localStorage.setItem('darkMode',true)
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem('darkMode',false)
      document.documentElement.classList.remove("dark")
    }
  }, [dark])



  return (
    <>
    <div className=' transition-all ease-in-out duration-200'>
    <NavigationBar />
      {/* <Home dark={dark} /> */}
      <button onClick={() => { setDark(!dark) }} className='dark:bg-white z-50 bg-black dark:text-black text-white w-9 h-9 rounded-full fixed left-[70%] top-[7%] transition-all duration-500 ease-in-out'>x</button>
      {/* <div className='flex gap-10 mt-10 justify-center items-center'>
      </div> */}
    </div>
    <div className='min-h-[60vh]'>

    <Routes>
        <Route path="/" element={<Home dark={dark} />} />
        <Route path="/blog" element={<Blogs/>} />
        <Route path="/blog/:id" element={<SingleBlogs/>} />
        <Route path="/projects" element={<div>this page is under construction</div>} />
    </Routes>
    </div>
    <Footer dark={dark}/>

    </>
  )
}

export default App
