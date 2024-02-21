import React, { CSSProperties, useState } from 'react';

import Select, { IndicatorSeparatorProps } from 'react-select';
// import { ColourOption, colourOptions } from '../data';

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

const colourStyles: StylesConfig<item> = {
  control: (styles, state) => ({
    ...styles,
    backgroundColor: 'transparent',
    position: 'relative',
    width: '100%',
    borderColor: '#003876',
    outline: 'none',
    transition: '0.1s ease',
    '&:hover': {
      border: '1px solid rgba(0, 56, 118, 0.5) ',
    },
    boxShadow: state.isFocused ? 'none' : 'none',
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
      borderBottom: `2px solid #F0F0F0`,
      padding: '0px 10px 20px 10px', // Adjust the padding to make the rows narrower
      // margin: '0px 5px 10px 10px', // Adjust the padding to make the rows narrower
      // margin: '100px', // Adjust the padding to make the rows narrower
      // marginRight: '1000px',
      height: '30px',
      // left: '100px',
      // height: '1%',
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
  singleValue: (styles, { data }) => ({
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
  menu: (provided, state) => ({
    ...provided,
    // zindex: 9999,
    // position: 'absolute',
    // background: 'red',
    top: 32,
    // margin: '100px !important',
    // borderBottom: '12px solid red', // Add your desired border style here
  }),
  menuList: (provided, state) => ({
    ...provided,
    // background: 'green',
    margin: '5px !important',
    padding: '5px !important',
    // borderBottom: '12px solid red',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: '#003876',
    '&:hover': {
      color: 'rgba(0, 56, 118, 0.5) ',
    },
  }),
};

interface props {
  placeholder?: string;
}

export default function CustomAriaLive({ placeholder = 'INSTITUCIÓN' }: props) {
  const [labelMessage, setLabelMessage] = useState(placeholder);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [labelIsTop, setLabelToTop] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const style: { [key: string]: CSSProperties } = {
    labeltest: {
      // fontWeight: 'bold',
      fontFamily: 'inter',
      // fontFamily: 'Inter, sans-serif', //Inter not work
      // fontFamily: 'sans-serif',
      // fontFamily: 'Inter',
      // fontFamily: 'roboto',
      // fontFamily: 'font-inter',
    },
    label: {
      top: '10px',
      position: 'absolute',
      backgroundColor: '#F0F0F0',
      color: '#707070',
      left: '10px',
      fontSize: '.75rem',
    },
    labeltop: {
      position: 'absolute',
      left: '2px',
      transform: 'translate(5px, -13px) scale(0.88)',
      zIndex: 3111,
      backgroundColor: '#F0F0F0',
      color: '#003876',
      padding: '0 4px',
      fontSize: '1rem',
      fontWeight: '400',
      letterSpacing: '0.15px',
    },
  };

  const handleBlur = (event) => {
    const blurValue = event.target.value;
    console.log('Should be blur value', blurValue);
    console.log('Should be blur  selectedValue ', selectedValue);
    if (!selectedValue) {
      setLabelToTop(false);
      console.log('valor handler ', selectedValue);
    }
  };
  const handleChange = (item) => {
    setSelectedValue(item);
  };
  const handleFOCUS = (item) => {
    console.log('FOCUS 2', item);
    // console.log('FOCUS 2', state);
    setLabelToTop(true);
  };

  const submit = (event) => {
    event.preventDefault();
  };

  const indicatorSeparatorStyle = {
    alignSelf: 'stretch',
    backgroundColor: '#003876',
    marginBottom: 8,
    marginTop: 8,
    width: 1,
  };

  const IndicatorSeparator = ({
    innerProps,
  }: IndicatorSeparatorProps<item, true>) => {
    return <span style={indicatorSeparatorStyle} {...innerProps} />;
  };

  return (
    <form className='w-full mt-5 ' onSubmit={submit}>
      <div className='font-inter text-xl'>This text is in Inter font.</div>
      {/* <div className='text-xl'>This text is in Inter font.</div> */}

      {/* <div className='font-inter'> */}
      <div style={style.labeltest}>
        <p>HOLA MICHAEL Inter</p>
      </div>
      <div className=' relative'>
        {labelIsTop ? (
          <label style={style.labeltop}>{labelMessage}</label>
        ) : (
          <label style={style.label}>{labelMessage}</label>
        )}

        <Select
          isClearable
          value={selectedValue}
          onChange={handleChange}
          onFocus={handleFOCUS}
          onBlur={handleBlur}
          name='instituciones'
          placeholder=''
          options={options}
          styles={colourStyles}
          components={{ IndicatorSeparator }}
        />
      </div>
    </form>
  );
}
