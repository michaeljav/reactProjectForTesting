import { type ReactElement } from 'react';

const SortWithoutBuiltFunnc = (): ReactElement => {
  const array: Array<number> = [20, 5, 1, 4, 80, 70, 55, 78];
  let temp: number;

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] > array[j]) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return (
    <>
      <div>sortWithoutBuiltFunnc</div>
      <div>{array.toLocaleString()}</div>
    </>
  );
};

export default SortWithoutBuiltFunnc;
