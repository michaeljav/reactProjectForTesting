import { useState } from 'react';

import ScreenSpinnerLoading from './ScreenSpinnerLoading';

// import ZodValidForm from './zodValidForm';

function ScreenSpinnerLoadingTesting() {
  const [loading, setLoading] = useState(true);
  // setInterval(() => {
  //   setLoading(!loading);
  // }, 5000);

  return (
    <>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-8xl'
        onClick={() => alert('Hola')}
      >
        HOLA
      </button>
      <ScreenSpinnerLoading loading={loading} setLoading={setLoading} />
    </>
  );
}

export default ScreenSpinnerLoadingTesting;
