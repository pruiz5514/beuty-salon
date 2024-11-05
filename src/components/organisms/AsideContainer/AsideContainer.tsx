'use client';

import { RxHamburgerMenu } from 'react-icons/rx'
import './AsideContainer.scss'
import { useState } from 'react';
import Aside from '@/components/molecules/Aside/Aside';

const AsideContainer = () => {
  const [asideState, setAsideState] = useState(false);

  const closeAside = () =>{ 
    setAsideState(false)
  }

  return (
    <>
        <div className='burger-container'>
            <button onClick={()=>setAsideState(true)} className='burger-button'><RxHamburgerMenu /></button> 
        </div>

        <div className='aside_desktop-container'>
         <Aside/>
        </div>

        {asideState && (
          <div className='aside-container'>
            <Aside functionProps={closeAside}/>
            <div onClick={closeAside} className='background-aside'></div>
          </div>
        )}
        
    </>
  )
}

export default AsideContainer