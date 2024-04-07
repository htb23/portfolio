import Particle from "@tsparticles/react";
import Image from "next/image";
import React from "react";
import TextEffect from "./TextEffect";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/16/solid";



const Hero = () =>{
    return(
<div className="h-[88vh] bg-[url('/images/db.jpg')] bg-cover bg-center ">
    <Particle />
    <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
      
      <div>
      <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I'M <span className="text-yellow-400">Muzammil</span>
        </h1>

       <TextEffect/>
       <p className="mt-[2rem] text-white text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsam numquam fuga quod facere expedita doloribus voluptatem cum illum molestiae sunt.</p>
       <div className="mt-[2rem] flex-col space-y-6  sm:space-y-0 sm:flex sm:flex-row items-center sm:spaxe-x-6">
      <button className="flex items-center space-x-2 px-[2rem] hover:bg-green-500 bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase">
        <p className="text-[20px] md:text-[15px] lg-text-[20]">Download CV</p>
        <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black"/>
        </button>  
        <button className="flex items-center space-x-4 px-4 ">
        <PhoneIcon className="w-[1.6rem] h-[1.7rem] text-white "/>
        <p className="text-[20p] sm:text-[20px] md:text-[15px] font-semibold text-white">Contct Me</p>
        
        </button> 
</div>
<div>


</div>
       </div>
       {/* <div className="mb-10 md:w-[500] md:h-[500] sm:w-[250] sm:h-[250]  relative lg-flex items-center ">
        <Image className="" width={300} height={300} src="/images/port1.png" alt="portfolio" ></Image>
        </div>  */}
    </div>
</div>
    )
}

export default Hero;