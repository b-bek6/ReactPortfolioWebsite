import React from 'react'
import { useState } from 'react'

export default function Footer({ dark }) {
    const currentYear = new Date().getFullYear();
    const svgData = `<?xml version="1.0" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="${!dark ? '#b7b6b6' : '#404040'}" fill-opacity="1000" d="M0,288L120,250.7C240,213,480,139,720,138.7C960,139,1200,213,1320,250.7L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>`;
    const textStyle = {
        // fontFamil:'', // Use a generic cursive font family
        // Add more CSS properties as needed
    };

    return (
        <div>
            <div className="bg-cover relative bg-center h-[40vh] w-[100vh]" style={{ backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svgData)}")`, width: '100vw' }}>
                <div className="absolute top-10 left-0 z-50 right-0 bottom-0 flex items-center justify-center ">
                    <a href="https://www.instagram.com/bibek.ghimire_/" src="#" className="text-white text-lg mx-2 "><svg
                        viewBox="0 0 960 1000"
                        fill="currentColor"
                        height="1.5em"
                        width="1.5em"
                    >
                        <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 01-47.9 47.9z" />
                    </svg></a>
                    <a href="https://www.facebook.com/bibek.ghimire.92123" className="text-white text-lg mx-2  "> <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="2em"
                        width="2em"
                    >
                        <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980s-246.667-47-340-141S0 632 0 500c0-133.333 46.667-246.667 140-340S346.667 20 480 20m114 330v-78h-72c-29.333 0-54 11-74 33s-30 49-30 81v44h-76v74h76v222h86V504h90v-74h-90v-52c0-18.667 6-28 18-28h72" />
                    </svg></a>
                    <a href="https://www.youtube.com/channel/UCfqkTL1RcKTtQXYeI0qHxhA" className="text-white text-lg mx-2 "><svg
                        viewBox="0 0 960 1000"
                        fill="currentColor"
                        height="2.5em"
                        width="2.5em"
                    >
                        <path d="M941.3 296.1a112.3 112.3 0 00-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0082.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" />
                    </svg>
                    </a>


                    <a href="https://www.linkedin.com/in/bibek-ghimire-18099b21a/" className="text-white  text-lg mx-2  "> <svg
                        viewBox="0 0 960 1000"
                        fill="currentColor"
                        height="2em"
                        width="2em"
                    >
                        <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98" />
                    </svg></a>

                    <a
                        href="https://twitter.com/bibek_ghimire_"
                        className="bg-white rounded-full  text-[#b7b6b6] dark:text-[#404040] "
                        
                    >

                        <svg
                            viewBox="0 0 960 1000"
                            fill="currentColor"
                            height="1.5em"
                            width="1.5em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                        </svg>
                        
                    </a>

                </div>

                <p style={textStyle} className="absolute top-40 left-0 right-0 bottom-0 flex items-center justify-center text-black dark:text-white">©{currentYear} Bibek Ghimire, All rights reserved.</p>



            </div>

        </div>
    )
}
