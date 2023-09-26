import React, { useEffect, useRef, useState } from "react";

import blankAvatar from '../../assets/avt.png';
import Divider from "../Divider/Divider";
import { useStateContext } from "../../contexts/ContextProvider";

const Header = () => {

  const { mode, setMode } = useStateContext();
  const toggleRef = useRef();

  const handleToggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    console.log(toggleRef);
  }, [mode])
  return (
    <>
      <header className="w-full flex justify-between items-center px-10 py-20 bg-white">
        <h1 className="text-2xl">Bookstore</h1>
  
        <section className="flex items-center gap-20">
          {/* Toggle mode button */}
          <section className="flex items-center gap-8 cursor-pointer">
            <div onClick={handleToggleMode} className="w-50 h-25 flex items-center p-4 bg-primary rounded-full">
              <div ref={toggleRef} className="w-20 h-20 bg-white rounded-full" />
            </div>
            <span>{mode.charAt(0).toUpperCase() + mode.slice(1)} mode</span>
          </section>
    
          {/* Avatar & name */}
          <section className="flex items-center gap-8">
            <div className="w-30 h-30 bg-primary rounded-full overflow-hidden">
              <img className="w-full h-full" src={blankAvatar} alt="avatar" />
            </div>
            <p>Anh Nguyen</p>
          </section>
        </section>
      </header>
      <Divider />
    </>
  );
};

export default Header;
