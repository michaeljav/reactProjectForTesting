import { type ReactElement } from 'react';

const TestFont = (): ReactElement => {
  return (
    <div className='flex justify-center items-center h-screen bg-green-700 min-w-[142px]'>
      <div className=' h-80 bg-amber-400'>
        <div
          // className=' text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 
          // 2xl:text-2xl  whitespace-nowrap bg-red-700'
          className=' text-2xl  
          whitespace-nowrap bg-red-700'
        >
          TestFont <span className=''>hola </span>{' '}
        </div>
      </div>
    </div>
    // <div className='flex justify-center items-center h-screen bg-green-700'>
    //   <div className='w-[80%] h-80 bg-amber-400'>
    //     <div className='w-[100%] text-[700%] whitespace-nowrap bg-red-700'>
    //       TestFont <span className=''>hola </span>{' '}
    //     </div>
    //   </div>
    // </div>
  );
};

export default TestFont;
