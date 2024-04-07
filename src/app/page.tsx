"use client"

import Education from "@/Components/Education";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Services from "@/Components/Services";

// import { useState } from "react";


export default function Home() {
  // const [navbar, setNavigation]= useState(false);
  // const openNavigation = ()=>setNavigation(true);
  // const closeNavigation = ()=> setNavigation(false);
  return (
   <div className="overflow-x-hidden">
    <div>

    <Hero/>
    <Services/>
    <Education/>
      </div>
   </div>
  );
}
