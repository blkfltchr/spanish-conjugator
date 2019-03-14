import React from 'react';
import './checkmark.css';

const Checkmark = (props) => {
  const hide = 'checkmark-hide';
  const display = 'checkmark-display';
  return ( 
    <div className={props.correct ? display : hide}>
      {/* Right aligned solid check */}
      <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
      {/* Center-aligned check above submit */}
       {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
        <circle className="path circle" fill="none" stroke="#73AF55" strokeWidth="6" strokeMiterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
        <polyline className="path check" fill="none" stroke="#73AF55" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
      </svg> */}
    </div>
   );
}
 
export default Checkmark;