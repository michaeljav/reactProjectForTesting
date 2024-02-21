
import { type ReactElement } from 'react';

import Select, { StylesConfig } from 'react-select';
// import CustomSelect from './selecttest';
import SelectDropdown from './combo';

const options = [
  { value: 'place', label: 'Place' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
interface item {
  value: string;
  label: string;
}
// interface items {
//   items: Array<item>[];
// }

// const dot = (color = 'transparent') => ({
//   alignItems: 'center',
//   display: 'flex',

//   ':before': {
//     backgroundColor: color,
//     borderRadius: 10,
//     content: '" "',
//     display: 'block',
//     marginRight: 0,
//     height: 10,
//     width: 10,
//   },
// });

// const colourStyles: StylesConfig<ColourOption> = {
const colourStyles: StylesConfig<item> = {
  
  container: (provided, state) => ({
    // Add your custom styles for the container here
    // backgroundColor: 'lightblue', // Change this to your desired background color
    // backgroundColor: state.isFocused ? 'lightblue' : 'white',
    // borderColor: state.isFocused ? 'yellow' : 'red',

    // border: 'yellow', // Change this to your desired background color
    // You can adjust other styles such as padding, margin, etc.
    // Example: padding: '10px',
    // Make sure to retain other provided styles
    ...provided,
  }),
  control: (styles, state) => ({
    ...styles,
    backgroundColor: 'transparent',
    // backgroundColor: 'yellow',
    position: 'relative',
    width: '100%',
    // height: '50px',
    borderColor: '#003876',
    outline: 'none',
    // fontSize: '2.2em',
    transition: '0.1s ease',
    // zIndex: 1111,
    '&:hover': {
      // border: '1px solid #003876', // Change hover border color here
      border: '1px solid rgba(0, 56, 118, 0.5) ', // Change hover border color here
    },
    border: state.isFocused
      ? '1px solid #003876'
      : state.isFocused
      ? ''
      : 'undefined',

    // border: state.isFocused ? '2px solid #FF5733' : '1px solid #ccc', // Change border color on focus
    // boxShadow: state.isFocused ? '0 0 3px #FF5733' : 'none', // Add a box shadow on focus
    boxShadow: state.isFocused ? 'none' : 'none', // Add a box shadow on focus
    // '&:hover': {
    //   border: '2px solid #FF5733', // Change border color on hover
    // },
    // border: 'none',
    // color: '#003876',
    // ':focus': {
    //   backgroundColor: 'yellow', // Change this to the desired focused border color
    // },
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    // const color = chroma(data.color);
    return {
      ...styles,

      // backgroundColor: isDisabled
      //   ? undefined
      //   : isSelected
      //   ? 'blue'
      //   : isFocused
      //   ? 'red'
      //   : undefined,
      backgroundColor: isFocused ? '#FFFFFF' : undefined,
      // color: isDisabled ? '#ccc' : isSelected ? 'brown' : 'yellow',
      color: isFocused ? '#DE1C28' : '#003876',
      // cursor: isDisabled ? 'not-allowed' : 'default',
      // border: `1px dotted #DE1C28`,
      // height: '10%',

      // color: isFocused ? '#DE1C28' : isSelected ? 'red' : 'yellow',
      // color: '#003876',
      // color: is ? 'yellow' : 'yellow',
      // cursor: isDisabled ? 'not-allowed' : 'default',

      // ':active': {
      //   ...styles[':active'],
      //   backgroundColor: !isDisabled
      //     ? isSelected
      //       ? '#DE1C28'
      //       : 'red'
      //     : undefined,
      // },
    };
  },
  // input: (styles) => ({ ...styles, ...dot() }),
  // input: (styles) => ({ ...styles, ...dot('red') }),
  // placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
  // placeholder: (styles) => ({
  //   ...styles,
  //   // alignItems: 'center',
  //   // display: 'flex ',
  //   // top: '-20px',
  //   position: 'relative',
  //   backgroundColor: 'yellow',

  //   // ':focus': {
  //   //   backgroundcolor: 'yellow',
  //   // },

  //   // ':before': {
  //   //   backgroundColor: 'red',
  //   //   // borderRadius: 10,
  //   //   content: '" "',
  //   //   display: 'block',
  //   //   position: 'absolute',
  //   //   // marginRight: 8,
  //   //   height: 10,
  //   //   width: 10,
  //   //   top: 30,
  //   // },
  // }),
  // singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
  // singleValue: (styles, { data }) => ({ ...styles, backgroundColor: 'gray' }),
  singleValue: (styles, { _data }) => ({
    ...styles,
    color: '#003876',
  }),
  placeholder: (provided) => ({
    ...provided,
    // position: 'absolute',
    // top: 0, // Adjust the vertical position as needed
    // transform: 'translateY(-80%)',
    // transition: 'top 0.2s',
    // zIndex: 1111,
  }),
};

const App = (): ReactElement => {
  return (
    <>
      <div className='relative'>
        <SelectDropdown />
        <p>holamichae</p>
      </div>
      <div className='m-5 w-52 entryarea relative leading-5'>
        <Select
          isClearable
          // placeholder='Instituciones'
          placeholder=''
          options={options}
          styles={colourStyles}
          className='custom-select'
        />
        <label
          htmlFor='place'
          className='labelline custom-select  absolute top-[23%]  left-[11px] text-base text-primary bg-secondary2  '
        >
          Place
        </label>
      </div>
    </>
  );
};

export default App;
