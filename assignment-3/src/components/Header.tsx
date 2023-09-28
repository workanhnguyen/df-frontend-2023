import React, { useEffect, useRef } from 'react';

import blankAvatar from '../assets/avt.png';
import Divider from './Divider';
import { useStateContext } from '../contexts/ContextProvider';

const Header: React.FC = () => {
  const context = useStateContext();
  const mode = context?.mode;
  const setMode = context?.setMode;
  const toggleRef = useRef(null);

  const handleToggleMode = () => {
    setMode!(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <header
        className={`w-full flex justify-between items-center px-3 py-4 ${
          mode === 'light' ? 'bg-white' : 'bg-slate-700 text-white'
        }`}
      >
        <h1 className="text-3xl font-bold">Bookstore</h1>

        <section className="flex items-center gap-10">
          {/* Toggle mode button */}
          <section className="flex items-center gap-2 cursor-pointer">
            <div
              onClick={handleToggleMode}
              className={`relative w-12 h-6 flex items-center ${
                mode === 'light' ? 'bg-primary' : 'bg-black'
              } rounded-full`}
            >
              <div
                ref={toggleRef}
                className={`absolute w-5 h-5 ${
                  mode === 'light' ? 'left-1' : 'right-1'
                } w-5 h-5 bg-white rounded-full`}
              />
            </div>
            <span>{mode?.charAt(0).toUpperCase() + mode!.slice(1)} mode</span>
          </section>

          {/* Avatar & name */}
          <section className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full overflow-hidden">
              <img className="w-full h-full" src={blankAvatar} alt="avatar" />
            </div>
            <p>Anh Nguyen</p>
          </section>
        </section>
      </header>
      <Divider />
    </>
  )
}

export default Header
