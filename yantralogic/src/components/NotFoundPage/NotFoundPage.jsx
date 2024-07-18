import React from 'react';
import './NotFoundPage.css'; // Import the CSS file for custom styles

function NotFoundPage() {
  return (
    <div className='w-full h-[80vh] flex justify-center items-center'>
      <div className='flex flex-col gap-2 justify-center items-center'>
        <h1 className='text-[10em] font-bold galaxy-text '>Oops!</h1>
        <p className='font-bold text-2xl text-center'>404 - Page not Found</p>
        <p className='text-lg w-2/4 text-center'>The page you are looking for might have been removed
            had its name changed or is temporarily unavailable.
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;
