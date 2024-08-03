import React from 'react';
import './NotFoundPage.css'; // Import the CSS file for custom styles

function NotFoundPage() {
  return (
    <div className='w-full h-[80vh] flex justify-center items-center bg-gray-900 text-white'>
      <div className='flex flex-col gap-2 justify-center items-center'>
        <h1 className='text-[10em] font-bold font-["MochiyPopOne-Regular"]'>Oops!</h1>
        <p className='font-bold text-3xl text-center font-["MochiyPopOne-Regular"]'>404 - Page not Found</p>
        <p className='text-xl w-2/4 text-center font-["MochiyPopOne-Regular"]'>The page you are looking for might have been removed
            had its name changed or is temporarily unavailable.
        </p>
      </div>
    </div>
  );
}
// add galaxy-text class to 'h1'
export default NotFoundPage;
