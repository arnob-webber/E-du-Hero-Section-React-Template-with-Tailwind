
import React, { useEffect } from 'react';
import herImg from './assets/img.png'
import logoImg from './assets/head-logo.png'
import { gsap } from "gsap";

function Hero() {

  useEffect(() => {
    gsap.to('.nvbar', {
      duration: 2.5,
      ease: 'elastic.out(1, 0.3)',
      y: 0,
    });

    // gsap.to('.hr-lft-img', {
    //   duration: 2.5,
    //   ease: "elastic.in(1,0.3)",y: 250
    //   });
// u can add this if u want to or just leav it 


  }, []);

  return (
    <>

<div class="relative min-h-screen w-full overflow-hidden bg-white">
        <div class="absolute -left-1/4 top-0 h-72 w-72 rounded-full bg-gradient-to-br from-red-200 via-red-300 to-red-400 opacity-70 blur-3xl"></div>
        <div class="absolute right-1/4 top-1/2 h-96 w-96 rounded-full bg-gradient-to-br from-blue-300 via-blue-400 to-blue-600 opacity-70 blur-3xl"></div>
        <div class="absolute bottom-1/4 left-1/3 h-80 w-80 rounded-full bg-gradient-to-br from-navy-600 via-navy-700 to-navy-800 opacity-70 blur-3xl"></div>
        <div class="relative z-10 min-h-screen">
<header class="">
        <div class="px-4 mx-auto sm:px-6 lg:px-8">
            <div class="nvbar flex items-center justify-between h-16 lg:h-20" style={{ transform: 'translateY(-250px)' }}>
                <div class="flex-shrink-0">
                    <a href="#" class="flex">
                        <img class="w-auto h-8" src={logoImg} alt="" />
                    </a>
                </div>

                <button type="button" class="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100">
            
                    <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>

                    <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                <div class="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
                    <a href="#" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> home </a>

                    <a href="#"  class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> courses </a>

                    <a href="#"  class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> about us </a>

                    <a href="#"  class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> contact </a>

                    <div class="w-px h-5 bg-black/20"></div>

                    <a href="#" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Sign up </a>

                    <a href="#"class="  inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white" role="button">demo class </a>
                </div>
            </div>
        </div>
    </header>

    <section class="py-10 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <h1 class="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                       A new way to learn & 
                        <div class="relative inline-flex">
                            <span class="absolute inset-x-0 bottom-0 border-b-[30px] border-[#A7CAFB]"></span>
                            <h1 class="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">get knowledge</h1>
                        </div>
                    </h1>

                    <p class="mt-8 text-base text-black sm:text-xl">unlock your potential with top-notch courses taught by industry experts. whether you're a beginner or looking to upgrade your skills, we’ve got you covered.</p>

                    <div class="mt-10 sm:flex sm:items-center sm:space-x-8">
                        <a href="#" class=" text-black rounded-md inline-flex items-center justify-center px-10 py-4 text-base font-semibold transition-all duration-500 bg-lime-400 hover:bg-lime-600 focus:bg-lime-600" role="button"> Start exploring </a>

                        <a href="#"  class="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 ">
                   
                            <img  class= " hover:border-transparent hover:bg-lime-900 border rounded-full w-10 h-10 mr-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAABDElEQVR4nO2XMUpDQRCGv4CkED2BZRpbC68heAFLW/E5U6+lV/AKaVNavJ19wUrBQjyAYCekEStlJZo04Sla+DIJ+8H0H7vsv/9AoVAoFP6MRg5CzRZeUWMoxpM0HOJVUBN5OmKMTq/Zwaugfs1EG47J9HAqmGdjVc2uZ8Gsxqsa5+GevgtBSTxo4nFRVIy7s8j+0gXVGIYbNsW40MTbguS7GJc6ZnupgsyoInuSuG05zW4j6TvBKaFmQyMnmnhpEe0mkn4SnCNjBmpctTyk/4+k3wh+kulJw5EknjuNpLUQFK9XHDw/ksprzATPQS3uv7rkvCzoitStidvCKl4rv++lKTpfOwuFQmGN+ABHKq6WqTMIOAAAAABJRU5ErkJggg==" alt="play--v1"></img>
                            Free Tutorial
                        </a>
                    </div>
                </div>

                <div>
                    <img class="w-full hr-lft-img" src={herImg} />
                </div>
            </div>
        </div>
    </section>

        </div>
    </div>

    </>
  )
}

export default Hero
