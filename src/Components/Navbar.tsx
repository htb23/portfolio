import Link from "next/link";
import React from "react";

function Navbar(){
    return(
        <div className="W-[100%] top-0 h-[12vh] bg-[#141c27] shadow-md">
        <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
            <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">Muzammil 
            <span className="text-yellow-500">Mazhar</span></h1>
    ``<Link href="/" className="nav-link">Home</Link>
               <Link href="/Services" className="nav-link">Services</Link>
               <Link href="" className="nav-link">About</Link>
               <Link href="" className="nav-link">Projects</Link>
               <Link href="" className="nav-link">Blog</Link>
               <Link href="" className="nav-link">Contact</Link>
       </div>   
        
        </div>
    )
}

export default Navbar;