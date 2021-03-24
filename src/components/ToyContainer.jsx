import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = ({ toys }) => {
  return(
    <div id="toy-collection">
      {/* Render the collection of ToyCards */
        toys.map(toy => <ToyCard toy={ toy }/>)
      })
    </div>
  );
} 

export default ToyContainer;
