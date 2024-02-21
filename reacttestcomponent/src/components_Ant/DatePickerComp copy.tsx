import  {  type ReactElement } from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';

export const DatePickerComp = (): ReactElement => {

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className='App'>
      <DatePicker onChange={onChange} picker='year' />
      {/* <Button type="primary">Button</Button> */}
    </div>
  );
};
