import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";


const MobileNav = () =>{
 
return(
    <div className="fixed  transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#09101a]">
     <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-content">
 ``<Link href="" className="nav-link-mobile">Home</Link>
            <Link href="" className="nav-link-mobile">Services</Link>
            <Link href="" className="nav-link-mobile">About</Link>
            <Link href="" className="nav-link-mobile">Projects</Link>
            <Link href="" className="nav-link-mobile">Blog</Link>
            <Link href="" className="nav-link-mobile">Contact</Link>
    </div>   
     <div className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-300">
        <XMarkIcon/>
     </div>
     </div>
)
}

export default MobileNav;