import { useEffect, type ReactElement, useState } from 'react';
import play from './assets/play.svg';
import pause from './assets/pause.svg';
import reset from './assets/reset.svg';

interface Props {
  dalay: number;
}

export const Timeout = ({ dalay }: Props): ReactElement => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMessage('Delayed timeout');
    }, dalay * 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      {' '}
      {dalay} {''}
      {message ? message : '...waiting'}
    </div>
  );
};

interface Propsi {
  interval: number;
}
export const Interval = ({ interval }: Propsi) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, interval * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [count]);

  return <div>{count}</div>;
};

interface IntButton {
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  description: string;
  btnClass?: string;
  disabledButton?: boolean;
  classDisabledHover?: string;
  imgUrl: string;
  imgAlt: string;
}
const Button = ({
  onClick,
  description,
  btnClass,
  disabledButton = false,
  classDisabledHover,
  imgUrl,
  imgAlt,
}: IntButton): ReactElement => {
  return (
    <button
      onClick={onClick}
      // className={`${disabled && 'cursor-not-allowed opacity-50'}${btnClass}`}
      className={`w-32 h-12 text-white  ${btnClass} ${
        disabledButton && `cursor-not-allowed opacity-50  ${classDisabledHover}`
      } `}
      disabled={disabledButton}
    >
      <div className='flex gap-1   items-center'>
        <div className='text-white text-shadow font-inter text-xl  uppercase  '>
          {description}
        </div>
        <div className='w-6 h-6 '>
          <img src={imgUrl} alt={imgAlt} className=' ' />
        </div>
      </div>
    </button>
  );
};

interface Propsc {
  initalValue: number;
}

interface PropsDisabledButton {
  startIsDisabled: boolean;
  pauseIsDisabled: boolean;
  resetIsDisabled: boolean;
}

const initialDisabledButton: PropsDisabledButton = {
  startIsDisabled: false,
  pauseIsDisabled: true,
  resetIsDisabled: true,
};

export const IntervalDownCount = ({ initalValue = 0 }: Propsc) => {
  const [count, setCount] = useState<number>(initalValue);
  const [valueDisplay, setValueDisplay] = useState<string>('');
  const [run, setRun] = useState<boolean>(false);
  const [btnEnable, setBtnEnable] = useState<PropsDisabledButton>(
    initialDisabledButton
  );

  /*to run the downcount */
  useEffect(() => {
    let intervalId: number = 0;

    if (run && count > 0) {
      intervalId = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    }

    if (!run || count <= 0) {
      clearInterval(intervalId);
      setRun(false);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [count, run]);

  /*show two digit 00*/
  useEffect(() => {
    let valueToDisplay: string;
    if (count.toString().length < 2) {
      valueToDisplay = `0${count}`;
    } else {
      valueToDisplay = `${count}`;
    }
    setValueDisplay(valueToDisplay);
  }, [count]);

  const startHandle = () => {
    setRun(true);
    const disableButt: PropsDisabledButton = {
      startIsDisabled: true,
      pauseIsDisabled: false,
      resetIsDisabled: false,
    };
    setBtnEnable(disableButt);
  };

  const pauseHandle = () => {
    setRun(false);
    const disableButt: PropsDisabledButton = {
      startIsDisabled: false,
      pauseIsDisabled: true,
      resetIsDisabled: false,
    };
    setBtnEnable(disableButt);
  };
  const resetHandle = () => {
    setCount(initalValue);
    setRun(false);
    const disableButt: PropsDisabledButton = {
      startIsDisabled: false,
      pauseIsDisabled: true,
      resetIsDisabled: true,
    };
    setBtnEnable(disableButt);
  };

  return (
    <>
      {/* <div>
        <div className='flex flex-col items-center justify-center mt-7 w-48 h-28 bg-slate-500 '>
          <div className='text-white text-2xl font-custom'>{valueDisplay}</div>
          <div className='mt-3'>
            <Button
              onClick={start}
              description='Start'
              btnClass='p-1 bg-green-600  hover:opacity-80  rounded-xl text-white '
            />
            <Button
              onClick={pause}
              description='Pause'
              btnClass='p-1 bg-yellow-600  hover:opacity-80 mx-2 rounded-xl text-white'
            />
            <Button
              onClick={reset}
              description='Reset'
              btnClass='p-1 bg-red-600  hover:opacity-80 rounded-xl text-white'
            />
          </div>
        </div>{' '}
      </div> */}

      {/* <div className='w-96 h-64 border-bordepanel max-w-sm bg-white border  rounded-lg shadow  flex flex-col items-center bg-gradient-to-b from-[rgba(247,104,0,0.88)] via-[rgba(63,79,114,0.53)] to-[rgba(143,62,36,0.52)]'> */}
      <div className='w-96 h-60  max-w-sm  border-bordepanel  border  rounded-lg shadow-2xl  flex flex-col items-center bg-gradient-to-b from-[rgba(247,104,0,0.88)] via-[rgba(63,79,114,0.53)] to-[rgba(143,62,36,0.42)]'>
        <div className=' w-[95%]'>
          <div className='text-black my-2   text-2xl font-custom p-8 rounded-t-lg flex justify-center bg-gradient-to-b from-teal-500 to-transparent'>
            <span className='text-7xl'>{valueDisplay}</span>
          </div>
          {/* <div className='px-5 pb-5 bg-white '> */}
          <div className='mt-8 w-full flex items-center  gap-2'>
            <Button
              onClick={startHandle}
              description='Start'
              btnClass='bg-gradient-to-b from-green-600 via-green-600 to-transparent hover:bg-gradient-to-b hover:from-green-700  font-medium rounded-lg text-sm px-3 py-2.5 text-center '
              disabledButton={btnEnable.startIsDisabled}
              classDisabledHover='hover:bg-gradient-to-b hover:from-green-600 hover:via-green-600 hover:to-transparent'
              imgAlt='play'
              imgUrl={play}
            />

            {/* <Button
              onClick={pause}
              description='Pause'
              btnClass=' hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-gradient-to-b from-blue-900 via-blue-900 to-transparent'
            /> */}
            <Button
              onClick={pauseHandle}
              description='Pause'
              // btnClass='w-32 h-12 text-white bg-gradient-to-b from-red-700 hover:bg-gradient-to-b hover:from-red-800 focus:ring-4 focus:outline-none focus:ring-gradient-to-b from ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
              btnClass='bg-gradient-to-b from-blue-900 via-blue-900 to-transparent hover:bg-gradient-to-b hover:from-blue-900   font-medium rounded-lg text-sm px-3 py-2.5 text-center 
            
              '
              disabledButton={btnEnable.pauseIsDisabled}
              classDisabledHover='hover:bg-gradient-to-b hover:from-blue-900 hover:via-blue-900 hover:to-transparent'
              imgAlt='pause'
              imgUrl={pause}
            />
            <Button
              onClick={resetHandle}
              description='Reset'
              btnClass='bg-gradient-to-b from-red-700 via-red-700 to-transparent hover:bg-gradient-to-b hover:from-red-800  font-medium rounded-lg text-sm px-3 py-2.5 text-center '
              disabledButton={btnEnable.resetIsDisabled}
              classDisabledHover='hover:bg-gradient-to-b hover:from-red-700 hover:via-red-700 hover:to-transparent'
              imgAlt='reset'
              imgUrl={reset}
            />
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
