import HeaderButton from "../buttons/headerbutton";
import { Menu} from "lucide-react";
const Header = () =>{

    return(
<>
<div id="About" className="min-h-20 italic bg-none flex flex-row lg:justify-between justify-center items-center">
    <div className="max-h w-[100%] lg:w-[30%]  flex flex-row items-center justify-start px-1 lg:px-1  text-2xl sm:text-3xl  md:text-4xl xl:text-5xl 2xl:text-6xl  text-white font-black tracking-widest">FRAME IT</div>
    <div className="max-h w-[90%] flex items-center min-w-auto rounded-2xl justify-end lg:justify-around px-2">
        { /* Hamburger Menu max-lg */}
        <button className="h-10 w-10"><Menu className="cursor-pointer lg:hidden h-full w-full" /></button>
        { /* Zwykły Widok*/}
        <div className="max-h w-[100%] lg:w-[60%] hidden lg:flex items-center min-w-auto rounded-2xl justify-around px-2">
            <HeaderButton>About</HeaderButton>
            <HeaderButton>Collection</HeaderButton>
            <HeaderButton>Pricing</HeaderButton>
            <HeaderButton>Authors</HeaderButton>
            <HeaderButton>FAQs</HeaderButton>
            </div>
        <div className="min-h-20 w-[40%] hidden bg-none lg:flex flex-row justify-end">
            <button className="w-[30%] m-5 rounded-xl font-bold  text-white text-lg bg-transparent border-1 border-white">
                Sign up
            </button>
            <button className="w-[30%] m-5 rounded-xl font-bold  text-black text-lg bg-white">
                Log in
            </button>
        </div>
    </div>
</div>

</>
);
}
export default Header;