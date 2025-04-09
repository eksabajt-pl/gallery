'use client'
import React, {useContext, useRef, useState } from "react";
import { Sun } from "lucide-react";
import HeaderButton from "../buttons/headerbutton";
import { Menu, X} from "lucide-react";

import { ThemeContext } from "../../app/context/ThemeProvider";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
const Header = () =>{
    const context = useContext(ThemeContext);

    if (!context) {
      throw new Error("ThemeContext must be used within ThemeProvider");
    }
  const [enable,setEnable] = useState(false);
  const menuref = useRef(null);
  const FirstAction = useRef(true);
  const [animating, setAnimating] = useState(false);
  useGSAP(()=>{
    if(FirstAction.current){
      FirstAction.current = false;
      gsap.set(menuref.current, {
        x:"-150%"
      })
    
      return
    }
    if(animating) return;
    setAnimating(true);
    if(enable) {
    gsap.from(menuref.current,{
      x:"-150%",
      display:"flex",
    })
    gsap.to(menuref.current,{
      x:0,
      duration:0.5,
      display:"flex",
      direction:"col",
      ease:"back.in",
      zIndex:100,
      onComplete: () => setAnimating(false),
    })
}
    else{
      gsap.from(menuref.current,{
        x:0,
        display:"flex",
      })
      gsap.to(menuref.current,{
        x:"-150%",
        duration:1,
        display:"flex",
        direction:"column",
        ease:"back.out",
        zIndex:100,
        onComplete: () => setAnimating(false),
      })
    }
  },[enable])
    const {setTheme } = context;
  const toggleMenu = () => {
    if(animating) return;
    setEnable((prevState) => !prevState)
  }
    return(
<>
    <div id="About" className="sticky w-[100vw] top-0 min-h-20 bg-background flex flex-row lg:justify-start justify-center items-center">
    <div className="flex w-[20vw] justify-center flex-col items-center">
      <div className="tracking-[5px] text-lg font-bold w-[100%] text-foreground text-center">galeria</div>
    <div className="text-lg w-[100%] text-foreground text-center">kwarantanna</div></div>
    <div className="flex w-[80vw] flex-row justify-end">
        { /* Hamburger Menu max-lg */}
        <button onClick={toggleMenu}className="h-10 w-10"><Menu className="cursor-pointer text-foreground lg:hidden h-full w-full" /></button>
        { /* Zwykły Widok*/}
        <div className="px-2 max-h w-[70%] lg:flex justify-end hidden items-center">
            <HeaderButton>About</HeaderButton>
            <HeaderButton>Collection</HeaderButton>
            <HeaderButton>Pricing</HeaderButton>
            <HeaderButton>Authors</HeaderButton>
            <HeaderButton>FAQs</HeaderButton>
            <button className="border-1 border-foreground text-foreground rounded-xl p-2">Zamówienia</button>
            <button className="text-foreground my-2 mx-5" onClick={() => setTheme((prev) => !prev)}><Sun /></button>
            </div>
        

    </div>
</div>
<div ref={menuref} className={`z-auto absolute top-0 ${enable ? `flex` :`hidden`} flex-col w-[80vw] h-full bg-background`}>
  {/* Górna Sekcja */}
  <div className="max-w flex justify-between"><div className="m-2 text-2xl">Choose your destination</div><X onClick={toggleMenu} className="m-2 cursor-pointer" /></div>
  <HeaderButton>About</HeaderButton>
            <HeaderButton>Collection</HeaderButton>
            <HeaderButton>Pricing</HeaderButton>
            <HeaderButton>Authors</HeaderButton>
            <HeaderButton>FAQs</HeaderButton>
</div>
</>
);
}
export default Header;