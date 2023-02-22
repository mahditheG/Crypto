import React from 'react';
//gif
import spinner from '../assets/gif/spinner.gif'
const Loader = () => {
     return (
          <div>
               <img src={spinner} alt='loader' />
               <h3>Loading...</h3>
          </div>
     );
};

export default Loader;