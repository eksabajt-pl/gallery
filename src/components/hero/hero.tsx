'use client'
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { CSSPlugin } from "gsap/CSSPlugin";
gsap.registerPlugin(CSSPlugin);
const HeroSection = () => {
    const RefHero = useRef(null);
useGSAP(() => {
    gsap.from(RefHero.current,{
        y:100
    })
    gsap.to(RefHero.current,  {
        y:0,
        ease:"back.out",
        duration:1,
        zIndex:2
    })
})
return(
    <div className="flex justify-center min-h-[calc(100vh-80px)] w-[100vw]  flex-row ">
    <div className="flex flex-col max-h">
    <div className="w-[100vw] h-[100%] flex justify-start bg-[url('/dark.jpg')] bg-cover bg-center bg-no-repeat shadow-black/50">
        <div className="font-extralight bg-background/80 w-[80%] lg:w-[50%] xl:w-[30%] h-fit text-7xl p-5 m-5 text-center" ref={RefHero}>
<div className="text-2xl lg:text-4xl my-6">Visit our gallery online</div>
<div className="text-xs lg:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in pulvinar erat, ac vulputate risus. Pellentesque suscipit felis sit amet ullamcorper blandit. Maecenas est justo, convallis vitae dolor sed, fringilla placerat nunc. Ut sed blandit ipsum. Sed tincidunt hendrerit mi. Vivamus eu neque in elit pretium suscipit. Cras fringilla dolor arcu, vitae blandit turpis vestibulum eu. Ut vel urna magna. Integer pretium nunc nisi, ut dapibus felis vulputate in. Donec vulputate mattis justo, non feugiat augue porttitor eu.</div>
        </div>
    </div>
    </div>

    </div>
)
}
export default HeroSection;