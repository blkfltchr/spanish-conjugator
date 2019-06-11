import { useState } from 'react';

export default function useSubjUpdate(val) {
  const [subjArr, setSubjArr] = useState([]);
  // check if tense is in the arr
  // add or remove if it's in the arr
  const useSubjChange = val => {
    if (subjArr.includes(val)) {
      setSubjArr(
        subjArr.filter(word => {
          return word !== val;
        })
      );
    } else {
      setSubjArr([...subjArr, val]);
    }
  };
  return [subjArr, useSubjChange];
}
