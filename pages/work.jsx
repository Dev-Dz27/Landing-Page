import React from "react";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import data from "../seeds/data.json";

const work = () => {
  return (
    <div>
       
      <Hero work={data.work} />
      <Portfolio />
   
    </div>
  );
};

export default work;
