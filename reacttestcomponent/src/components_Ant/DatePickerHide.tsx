import { useEffect, useRef, useState, type ReactElement } from 'react';
import { DatePicker, DatePickerProps } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import { Dayjs } from 'dayjs';
import { DatePickerType } from 'antd/es/date-picker';

export const DatePickerComp = (): ReactElement => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [openMenuDatePicker, setOpenMenuDatePicker] = useState(true);
  const [valueInput, setValueInput] = useState<string>('');
  // const handleDatePickerChange = (date: any, dateString: string|string[]) => {
  const handleDatePickerChange = (
    date: Dayjs,
    dateString: string | string[]
  ) => {
    console.log(date, dateString); // Handle date change as needed

    //set value
    const valueStrin: string = date ? date.format('YYYY-MM-DD') : '';
    console.log(
      'value',
      valueStrin,

      // date.format('YYYY-MM-DD'),
      dateString
    );
    setValueInput(() => valueStrin);
    //when I clean the datepicker input  then hide datepicker
    !date && setShowDatePicker(false);

    //when I select the date then close the datepicker menu
    setOpenMenuDatePicker(false);
  };

  const handleDatePickerClick = () => {
    setShowDatePicker(!showDatePicker);
    setOpenMenuDatePicker(true);
  };
  // const datePickerRef = useRef<any>();
  const onOpenChange = (open: boolean) => {
    console.log('entro testing', open, valueInput);
    setOpenMenuDatePicker(open);
    
  };
  useEffect(() => {
    console.log('useEffect', valueInput);
   
    //If the datepicker menu is closed and the input  is empty then i hide the datepicker
    //**The use case mainly applies when I enter for the first time and  do not select any day and click outside of the datepicker, I have to  close it */
    if (!openMenuDatePicker&&valueInput=='') {
      setShowDatePicker(false);
    }
  },[openMenuDatePicker, valueInput]);

  const onTesting = () => {
    console.log('onTESTING');
  };
  
  return (
    <div>
      {/* <div className="date-picker-icon" onClick={handleDatePickerClick}>
        <CalendarOutlined />
      </div> */}
      {showDatePicker ? (
        <div className='date-picker-container'>
          <DatePicker
            // ref={datePickerRef}
            open={openMenuDatePicker}
            onChange={handleDatePickerChange}
            onOpenChange={onOpenChange}
            onCompositionEnd={onTesting}
            // onPanelChange={onTesting}
            // onMouseOut={onTesting}
            // onMouseLeave={onTesting}
            // onEmptied={onTesting}
            // onBlurCapture={onTesting}
            // onAbort={onTesting}
            // onContextMenu={onTesting}
            // onClick={onClickDatepicker}
            // onBlur={onBlurDatepicker}
            // onContextMenu={onTesting}
            // onKeyDown={onTesting}
            // onMouseLeave={onTesting}
            // onKeyDown={onTesting}
            // onPanelChange={onTesting}
            // onOpenChange={onTesting}
            // onBlur={onTesting}
            className='text-red-700 font-semibold'
            suffixIcon={<CalendarOutlined style={{ color: 'blue' }} />}
          />
        </div>
      ) : (
        <div className='hover:cursor-pointer' onClick={handleDatePickerClick}>
          <CalendarOutlined style={{ color: 'blue' }} />
        </div>
      )}
    </div>
  );
};
