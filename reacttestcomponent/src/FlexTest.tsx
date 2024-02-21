import { type ReactElement } from 'react';

const FlexTest = (): ReactElement => {
  return (
    <div className='bg-red-500 w-12/12 h-screen flex flex-wrap gap-1'>
  <div className='flex w-full'>
    <div className='bg-green-500 w-80'>FlexTest</div>
    <div className='bg-yellow-500 w-80 '>FlexTest</div>
    <div className='bg-blue-500 w-80'>FlexTest</div>
    <div className='bg-slate-600 w-80'>FlexTest</div>
  </div>
  <div className='bg-fuchsia-600 w-80'>FlexTest</div>
</div>
    // <div className='bg-red-500 w-12/12 h-screen flex flex-wrap justify-around gap-1'>
    //   {' '}
    //   <div className='bg-green-500 w-80'>FlexTest</div>
    //   <div className='bg-yellow-500 w-80 '>FlexTest</div>
    //   <div className='bg-blue-500 w-80'>FlexTest</div>
    //   <div className='bg-slate-600 w-80'>FlexTest</div>
    //   {/* <div className='bg-pink-700 w-80'>FlexTest</div> */}
    //   <div className='bg-fuchsia-600 w-80 

    //   '>FlexTest</div>
    // </div>
  );
};

export default FlexTest;
