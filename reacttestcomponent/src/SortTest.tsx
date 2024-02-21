import { type ReactElement } from 'react';

//SORT  ORDER BY UNICODES
//https://symbl.cc/en/unicode/table/
const SortTest = (): ReactElement => {
  const array: Array<string> = ['Instagram', 'discord', 'youtube', 'café'];

  const array2 = [1, 100, 2, 10];
  const array3: Array<string> = ['2', '12', '1', '10', '5', '4', '3'];

  array.sort((a, b) => {
    console.log(a);
    console.log(b);
    // console.log(a - b);
    return a.localeCompare(b);
    // return a - b; //NO WORKS WITH STRINGS
    // return a > b;  //NO WORKS WITH STRINGS
  });
  console.log(array);

  // array2.sort((a, b) => {});
  array3.sort((a, b) => {
    console.log(a);
    console.log(b);

    // return a.localeCompare(b);
    // return parseInt(a) - parseInt(b);
    return parseInt(a) - parseInt(b);
  });
  console.log(array3);

  return <div>SortTest</div>;
};

export default SortTest;
