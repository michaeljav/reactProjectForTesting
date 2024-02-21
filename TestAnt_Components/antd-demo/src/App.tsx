import { useState } from 'react'
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <>
       <div className="App">
       <DatePicker onChange={onChange} picker='year' />
    {/* <Button type="primary">Button</Button> */}
  </div>
    </>
  )
}

export default App
