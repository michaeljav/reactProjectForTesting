import { ReactElement, useState } from 'react';
type TimeUnit = 'h' | 'd' | 's' | 'm' | 'a';
// function convertHoursToCalendarUnit(hours: number): {
//   unit: TimeUnit;
//   value: number;
// }

interface TimeConversionResult {
  unit: string;
  amount: number;
}

function convertMinutes(minutes: number): TimeConversionResult {
  const hours = minutes / 60;
  const days = hours / 24;
  const weeks = days / 7;
  const months = days / 30.44; // Approximate average number of days in a month
  const years = days / 365.25; // Approximate average number of days in a year (considering leap years)

  if (minutes < 60) {
    return { unit: 'minutes', amount: minutes };
  } else if (hours < 24) {
    return { unit: 'hours', amount: hours };
  } else if (days < 7) {
    return { unit: 'days', amount: days };
  } else if (weeks < 4) {
    return { unit: 'weeks', amount: weeks };
  } else if (months < 12) {
    return { unit: 'months', amount: months };
  } else {
    return { unit: 'years', amount: years };
  }
}

// interface TimeConversionResult {
//   unit: string;
//   amount: number;
// }

function convertMinutes2(minutes: number): TimeConversionResult {
  if (minutes < 60) {
    return { unit: 'minutes', amount: minutes };
  } else if (minutes < 1440) {
    return { unit: 'hours', amount: minutes / 60 };
  } else if (minutes < 10080) {
    return { unit: 'days', amount: minutes / 1440 };
  } else if (minutes < 43800) {
    return { unit: 'weeks', amount: minutes / 10080 };
  } else if (minutes < 525600) {
    return { unit: 'months', amount: minutes / 43800 };
  } else {
    return { unit: 'years', amount: minutes / 525600 };
  }
}

export const ConvertHoursToCalendarUnit = (): ReactElement => {
  const [min, setMin] = useState<number>(0);

  const onChange = (e) => {
    setMin(e.target.value);
  };

  return (
    <div>
      <form>
        <p>
          Minutes : {min} to unit of measurement{' '}
          {JSON.stringify(convertMinutes(min))}
        </p>
        <p>
          Minutes : {min} to unit of measurement{' '}
          {JSON.stringify(convertMinutes2(min))}
        </p>
        {/* <Input type='text' value={min} onChange={onChange} /> */}
        <input
          type='number'
          value={min}
          onChange={onChange}
          className='bg-green-200'
        />
      </form>
    </div>
  );
};
