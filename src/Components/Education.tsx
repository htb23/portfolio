import React from "react";

function Education(){
    return(
        <div className="py-5 bg-[#141c27] bg-cover bg-center justify-center">
           
          
           
        <h1 className=" text-[35px] md:text-[50px] text-white font-bold text-center">
            My <span className="text-green-500">Education</span></h1>
            <div className="mt-10 pb-10 p-10 gap-4 justify-between flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            <div className=" p-5 ">
               <button className="text-green-300 border-2 p-2  border-green-300 ">2019 - 2021</button>
                <h1 className="py-2 text-[25px] md:text-[30px] text-white font-bold text-left">Mascots School</h1>
                <p className="text-gray-400 px-0 py-2 text-left content-stretch">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, veniam aliquid voluptates explicabo quam eveniet temporibus , sunt ad adipisci eligendi. </p>
            </div>
            <div className="p-5 ">
            <button className="text-green-300 border-2 p-2  border-green-300 ">2021 - 2023</button>
                <h1 className="py-2 text-[25px] md:text-[30px] text-white font-bold text-left">Concordia College</h1>
                <p className="text-gray-400 px-0 py-2 text-left content-stretch">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, veniam aliquid voluptates explicabo quam eveniet temporibus , sunt ad adipisci eligendi. </p>
            </div>
            <div className="p-5 ">
            <button className="text-green-300 border-2 p-2  border-green-300 ">2023 - 2024</button>
               <h1 className="py-2 text-[25px] md:text-[30px] text-white font-bold text-left">PIAIC UMT</h1>
               <p className="text-gray-400 px-0 py-2 text-left content-stretch">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, veniam aliquid voluptates explicabo quam eveniet temporibus , sunt ad adipisci eligendi. </p>
           </div>
           <div className="p-5 ">
           <button className="text-green-300 border-2  p-2 border-green-300 ">2022 - 2023</button>
               <h1 className="py-2 text-[25px] md:text-[30px] text-white font-bold text-left">Theeta Academy</h1>
               <p className="text-gray-400 px-0 py-2 text-left content-stretch">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, veniam aliquid voluptates explicabo quam eveniet temporibus , sunt ad adipisci eligendi. </p>
           </div>
            
            
            </div>

            
    </div>
    )
}

export default Education;