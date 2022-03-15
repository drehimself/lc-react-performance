import React from 'react';
import GrandChild from './GrandChild';

function Child() {
  console.log('Child is rendering');

  return (
    <div>
      <div>Child Component</div>
      <div>
        <GrandChild />
      </div>
    </div>
  );
}

export default Child;
