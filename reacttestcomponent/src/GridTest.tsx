function GridTest() {
  return (
    <>
      {/* <div
        className='grid grid-cols-1 md:grid-cols-2 gap-4
       bg-yellow-500 sm:bg-green-600 md:bg-red-600 lg:bg-blue-gray-700 xl:bg-pink-600 2xl:bg-brown-600 22xl:bg-deep-orange-700 3xl:bg-deep-purple-700 
       justify-items-center 
      '
      > */}
      <div className='grid  grid-cols-2 sm:grid-cols-4 gap-4 wrap '>
      {/* <div className='grid   gap-4 grid '> */}
      <div className='bg-green-500 w-80'>FlexTest</div>
      <div className='bg-yellow-500 w-80 '>FlexTest</div>
      <div className='bg-blue-500 w-80'>FlexTest</div>
      <div className='bg-slate-600 w-80'>FlexTest</div>
      <div className='bg-pink-700 w-80'>FlexTest</div>
      <div className='bg-fuchsia-600 w-80 '>FlexTest</div>
      </div>
    </>
  );
}

export default GridTest;
