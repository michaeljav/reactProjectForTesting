import React, { useState, useEffect } from 'react';

// interface ShotClockProps {
//   initialTime: number;
// }

// const ShotClock: React.FC<ShotClockProps> = ({ initialTime }) => {
//   const [time, setTime] = useState(initialTime);
//   const [running, setRunning] = useState(false);

//   useEffect(() => {
//     let timer: NodeJS.Timeout;

//     if (running) {
//       timer = setInterval(() => {
//         if (time > 0) {
//           setTime(time - 1);
//         }
//       }, 1000);
//     }

//     return () => clearInterval(timer);
//   }, [time, running]);

//   const handleStart = () => setRunning(true);
//   const handlePause = () => setRunning(false);
//   const handleReset = () => setTime(initialTime);

//   return (
//     <div className='shot-clock'>
//       <div className='time'>{time}</div>
//       <div className='controls'>
//         <button onClick={handleStart}>Start</button>
//         <button onClick={handlePause}>Pause</button>
//         <button onClick={handleReset}>Reset</button>
//       </div>
//     </div>
//   );
// };

import './App.css';
// import { Interval, IntervalDownCount, Timeout } from './Timeout_Interval';
import { Interval, IntervalDownCount, Timeout } from './Timeout_Interval';
import { BallBounce } from './BallBounce';
import { MeteorPreview } from './panel';
function App() {
  return (
    <>
      {/* <div className='bg-green-500 sm:bg-pink-500 md:bg-yellow-500 lg:bg-slate-600 xl:bg-blue-500 2xl:bg-red-700'> */}
      {/* <div className=' m-52 hover:font-inter text-9xl '> */}
      <div className=' m-52 hover:font-roboto text-9xl '>
        <p>Michael Javier</p>
      </div>

      {/* <div className='custom-background w-full  h-[100vh] bg-slate-400'> */}
      {/* <div className='custom-background bg-cover bg-no-repeat bg-center min-h-screen  flex items-center justify-center'>
        <MeteorPreview />
        <BallBounce />
        <div className=' flex gap-2  '>
          <IntervalDownCount initalValue={15} />
          <IntervalDownCount initalValue={15} />
        </div>
      </div> */}
      {/* <Timeout dalay={5} /> */}
      {/* <Interval interval={1} /> */}

      {/* // <div className='App'>
    //   <h1>Shot Clock App</h1>
    //   <div className='shot-clocks'>
    //     <ShotClock initialTime={24} />
    //     <ShotClock initialTime={24} />
    //   </div>
    // </div> */}
    </>
  );
}

export default App;
