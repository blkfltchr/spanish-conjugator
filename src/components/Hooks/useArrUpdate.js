import { useState } from 'react';

export default function useArrUpdate(val) {
  const [arr, setArr] = useState(['Present', 'Preterite']);
  // check if tense is in the arr
  // add or remove if it's in the arr
  const useUpdate = val => {
    if (arr.includes(val)) {
      setArr(
        arr.filter(word => {
          return word !== val;
        })
      );
    } else {
      setArr([...arr, val]);
    }
  };
  return [arr, useUpdate];
}
