import React from 'react';
import { Button } from '../ui/button';

const Header = () => {
  return (
    <>
    <div className=' shadow-sm flex items-center '>
      <img src='/logo.svg' alt='Logo' className='w-36 h-20 ml-10  ' />
      <div className='absolute right-4'>
        <Button>Sign In</Button>
      </div>
    </div>
    </>
  );
}

export default Header;

