import Particles from "react-particles";
import AnimatedCursor from 'react-animated-cursor'
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import NavBar from "./NavBar";
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
  return (
    <>
    <div className=' grid items-center text-2xl dark:text-white'>
        <h1>BibekGhimire</h1>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <NavBar/>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
        <Particles options={options} init={particlesInit}/>
    <div className="h-[50vh] justify-center flex flex-col items-center">

    <div className="text-5xl dark:text-white">
        <p> 👋🏻, I am Bibek Ghimire, a Software Developer</p>
    </div>
    <div className="p-5 mt-5 text-white dark:text-black rounded-lg bg-gray-400 text-xl">
       <p>Changing the 🌏 for good, All statrs with me.</p>
    </div>
    </div>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    <div className="text-bold text-2xl dark:text-white">
        About Me
    </div>
    </>
  )
}
