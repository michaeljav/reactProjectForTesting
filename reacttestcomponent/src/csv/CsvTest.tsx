import React from 'react';
import { CsvFileInput } from './CsvFileInput';
// import CsvFileInput from './CsvFileInput';

export const CsvTest: React.FC = () => {
  return (
    <div>
      <p className='pt-5 font-bold'>CSV File Upload Example</p>
      <CsvFileInput />
    </div>
  );
};
