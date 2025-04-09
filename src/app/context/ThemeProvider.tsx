'use client'
import { createContext } from "react";
import { useState } from "react";
type ThemeType = {
    theme: boolean,
    setTheme: React.Dispatch<React.SetStateAction<boolean>>
}
export const ThemeContext = createContext<ThemeType | undefined>(undefined);
const Theme = ({children}:{children: React.ReactNode}) => {
    const [theme,setTheme] = useState<boolean>(false);

    return(
<ThemeContext.Provider value={{theme,setTheme}}>{children}</ThemeContext.Provider>
    );
}
export default Theme;