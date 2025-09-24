import styles from "../style";
import React, { useState } from 'react';
import { kevin1 } from "../assets";


const CTA = () => (
  <section className="pt-12">
    <h2 className="font-poppins font-semibold text-center xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full px-30">Featured Projects</h2>

    <section className="grid grid-cols-1 gap-4 justify-items-center items-center mt-10">
      <div className="bg-blue-200 rounded-lg flex items-start justify-between h-[350px] w-[1200px] my-4">
        <div className="flex flex-col justify-start p-6">
          <h2 className="font-poppins font-semibold text-4xl text-white">Panda Path</h2>
        </div>
        <img src={kevin1} alt="billing" className="w-2/5 h-auto relative z-[5] pt-5 pr-5" /> 
      </div>
      <div className="bg-blue-200 rounded-lg flex items-center justify-center h-[350px] w-[1200px] my-4">
        <h2 className="font-poppins font-semibold text-4xl text-white">Project Panini</h2>
      </div>
    </section>
  </section>
);

export default CTA;




