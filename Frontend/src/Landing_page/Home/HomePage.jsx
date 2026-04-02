import React from 'react';
import Hero from "./Hero";
import Award from "./Award";
import States from "./States";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from '../OpenAccount';


 export function HomePage() {
    return ( 
        <>
       
        <Hero/>
        <Award/>
        <States/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        
        </>
     );
}

