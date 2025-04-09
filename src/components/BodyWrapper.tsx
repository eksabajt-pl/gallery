'use client';
import { useContext } from 'react';
import { ThemeContext } from '../app/context/ThemeProvider';
const BodyWrapper = ({ children }: { children: React.ReactNode }) => {
    
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeContext not found");
  }

  const { theme } = context;

  return (
    <body
      className={`flex flex-col ${theme ? "dark" : "light"}`}
    >
      {children}
    </body>
  );
};

export default BodyWrapper;