import { useState } from 'react';

// export default function updateArr(initialArr, newVal) {
//   const [state, setState] = useState([initialArr]);
//   const changeArr = newVal => {
//     if (initialArr.includes(newVal)) {
//       setState(
//         initialArr.filter(word => {
//           return word !== newVal;
//         })
//       );
//     } else {
//       setState([...initialArr, newVal]);
//     }
//   };
// return [state, changeArr];
// }

export default function useArrUpdate(val) {
  const [arr, setArr] = useState(['present', 'preterite']);
  const updateArr = val => {
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
  return [arr, updateArr];
}
