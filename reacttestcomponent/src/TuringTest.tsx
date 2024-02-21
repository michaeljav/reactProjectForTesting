import { type ReactElement } from 'react';
import RouterTest from './RouterTest/RouterTest';

const LargestNumberInArray = ({ n }: { n: number }): ReactElement => {
  let result: number[] = [];

  result = [0, 1];
  for (let i = 1; i <= n; i++) {
    if (2 <= 2 * i && 2 * i <= n) {
      result[2 * i] = result[i];
    }

    if (2 <= 2 * i + 1 && 2 * i + 1 <= n) {
      // Accessing result inside the loop
      result[2 * i + 1] = result[i] + result[i + 1];
    }
  }

  return (
    <>
      <div className='flex flex-col items-center'>
        <p className=' text-3xl mb-10 font-extrabold'>
          Largest Number in Array
        </p>
        {result.toString()} Max value {Math.max(...result)}
      </div>
    </>
  );
};

// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.
const SortArray = ({ input }: { input: number[] }): ReactElement => {
  // solution
  // https://leetcode.com/problems/sort-array-by-increasing-frequency/solutions/1827081/javascript-easy-to-understand-detailed-explanation-with-map-or-array/

  // Core Strategy
  // The purpose of this problem is to sort the array with custom rules. It's straightforward, but we need to do more:

  // we need to count the frequency first since we don't have it
  // we need to do the sorting with frequency and value
  // For the first step, we coud use a map or an array to do the counting.
  // For the second step, we could use JS native sort method for an array to do custom sorting.

  const numfrecuency: Record<number, number> = {};
  const valuesInput: number[] = [...input];

  // console.log(valuesInput);
  // input.forEach((num) => {
  //   console.log(counts[num]);
  //   console.log(counts[num] || 0);
  //   counts[num] = (counts[num] || 0) + 1;
  // });

  ///OBTEN THE OCCURENCE OF THE NUMBERS OF THE ARRAY
  valuesInput.forEach((number) => {
    if (!numfrecuency[number]) {
      numfrecuency[number] = 1;
    } else {
      numfrecuency[number]++;
    }
  });
  console.log(input);
  console.log(numfrecuency);

  let sortedArray: Array<number>;
  sortedArray = [];
  // Sort the array based on occurrences and values
  sortedArray = valuesInput.sort((a, b) => {
    //EXTRAIGO LA FRECUENCIA DEL NUMERO DEL ARRAY
    const countA = numfrecuency[a];
    const countB = numfrecuency[b];

    //SI ES DIFERENTE LA FRECUENCIA ENTONCES  LO ORGANIZAO ASCENDENTEMENTE O INCREASING CRECIENTE
    if (countA !== countB) {
      return countA - countB; // Sort by least repeated  ascending
    }
    //SI TIENEN LA MISMA FRECUENCIA ENTONCES  LO ORGANIZO DESCENDENTEMENTE
    // If counts are the same, sort in descending order
    return b - a;
  });
  console.log(sortedArray);

  return (
    <>
      <div className='flex flex-col items-center mt-12'>
        <p className=' text-3xl mb-10 font-extrabold'>SortArray</p>
        <p>input = {input.toLocaleString()} </p>
        <p>clone input = {valuesInput.toLocaleString()} </p>
      </div>
    </>
  );
};

export const TuringTest = (): ReactElement => {
  // let num: number = { n: 7 }.n;
  return (
    <>
      <RouterTest />

      <LargestNumberInArray n={7} />
      <hr />
      <SortArray input={[-1, 1, -6, 4, 5, -6, 1, 4, 1]} />
      {/* <SortArray input={[2, 3, 1, 3, 2]} /> */}
    </>
  );
};
