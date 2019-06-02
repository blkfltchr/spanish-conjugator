import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  // props
  // console.log('header', props);
  // const { token } = props;
  // if (token) {
  return (
    <div className="header">
      <Link to="/">
        <span className="logo">
          Spanish Conjugator{' '}
          <span role="img" aria-label="colombia">
            🇪🇸
          </span>
        </span>
      </Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
}
//   return (
//     <div className="header">
//       <Link to="/">
//         <span className="logo">
//           Spanish Conjugator{' '}
//           <span role="img" aria-label="colombia">
//             🇪🇸
//           </span>
//         </span>
//       </Link>
//       <div>
//         <Link to="/signup">Signup</Link>
//       </div>
//     </div>
//   );
// }

export default Header;
