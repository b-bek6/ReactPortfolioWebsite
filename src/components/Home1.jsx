import Particles from "react-particles";
import AnimatedCursor from 'react-animated-cursor'
import { loadFull } from "tsparticles";
import { useCallback, useRef } from "react";
// import NavBar from "./Navbar2";
import { Button } from "@material-tailwind/react";
import Lottie from "lottie-react";
import Hello from '../assets/animation.json'
export default function Home() {
    const options = {
        particles: {
          number: {
            value: 15,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: ["#3cba54", "#f4c20d", "#db3236", "#4885ed"]
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 1
          },
          size: {
            value: { min: 1, max: 8 }
          },
          links: {
            enable: true,
            distance: 150,
            color: "#808080",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            outModes: "out"
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            },
            onClick: {
              enable: true,
              mode: "push"
            }
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 1
              }
            },
            push: {
              quantity: 4
            }
          }
        }
      };
    
      const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
      }, []);

      const animation = useRef()
  return (
    <>
    <div className="">

        {/* <NavBar/> */}
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    {/* </div> */}
        {/* <Particles options={options} init={particlesInit}/> */}
    <div className="h-[70vh] justify-center flex flex-col items-center">

    <div className="flex justify-center items-center" >
        <p className="text-5xl leading-tight dark:text-white "> 👋🏻, I am <span className="
            inline-block text-transparent bg-clip-text  from-yellow-500 to-teal-500 bg-gradient-to-r font-bold text-[60px] 
            underline decoration-4 md:decoration-8 underline-offset-[.5rem] md:underline-offset-[1rem] decoration-gray-200 dark:decoration-gray-800
            mb-2
            ">BIBEK GHIMIRE</span> <br />a Software Developer</p>
            <div className="hidden md:block">
            <Lottie lottieRef={animation} height={10} animationData={Hello}/>
            </div>
    </div>
    <div className="p-5 mt-5 text-white dark:text-black rounded-lg bg-gray-400 text-xl">
       <p>Changing the 🌏 for good, All statrs with me.</p>
    </div>
    </div>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    <div className="text-bold text-2xl dark:text-white">
        About Me
    </div>
      
    </div>
    {/* <div className=' grid items-center text-2xl dark:text-white'> */}
        {/* <h1>BibekGhimire</h1> */}
        {/* <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr> */}
    </>
  )
}
