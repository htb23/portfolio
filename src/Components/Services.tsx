import { CodeBracketSquareIcon, RocketLaunchIcon, Square3Stack3DIcon, WindowIcon } from "@heroicons/react/16/solid";
import { ChevronDoubleRightIcon, CommandLineIcon } from "@heroicons/react/24/outline";
import React from "react";

function Services(){
    return(
        <div className=" bg-[url('/images/db.jpg')] bg-cover bg-center justify-center">
           
          
           
            <h1 className=" text-[35px] md:text-[50px] text-white font-bold text-center">
                My <span className="text-green-500">Services</span></h1>
                <div className="mt-10 pb-10 p-10 gap-4 justify-between flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <div className="p-5 bg-red-600 justify-center">
                    <CodeBracketSquareIcon className="align-center w-[4rem] h-[4rem] text-white place-self-center"/>
                    <h1 className="text-[25px] md:text-[30px] text-white font-bold text-center">FRONTEND</h1>
                    <p className="px-5 py-5 text-center content-stretch">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, veniam aliquid voluptates explicabo quam eveniet temporibus , sunt ad adipisci eligendi. </p>
                </div>
                <div className=" p-5 bg-orange-600">
                <RocketLaunchIcon className="align-center w-[4rem] h-[4rem] text-white place-self-center"/>
                    <h1 className="text-[25px] md:text-[30px] text-white font-bold text-center">FRONTEND</h1>
                    <p className="px-5 py-5 text-center content-stretch">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, veniam aliquid voluptates explicabo quam eveniet temporibus , sunt ad adipisci eligendi. </p>
                </div>
                <div className=" p-5 bg-blue-600">
                   <Square3Stack3DIcon className="align-center w-[4rem] h-[4rem] text-white place-self-center"/>
                    <h1 className="text-[25px] md:text-[30px] text-white font-bold text-center">FRONTEND</h1>
                    <p className="px-5 py-5 text-center content-stretch">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, veniam aliquid voluptates explicabo quam eveniet temporibus , sunt ad adipisci eligendi. </p>
                </div>
                <div className="p-5 bg-purple-600">
                    <WindowIcon className="align-center w-[4rem] h-[4rem] text-white place-self-center"/>
                    <h1 className="text-[25px] md:text-[30px] text-white font-bold text-center">FRONTEND</h1>
                    <p className="px-5 py-5 text-center content-stretch">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, veniam aliquid voluptates explicabo quam eveniet temporibus , sunt ad adipisci eligendi. </p>
                </div>
                
                
                </div>

                
        </div>
    )
}

export default Services;