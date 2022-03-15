import React, { memo } from 'react';
import GrandChild from './GrandChild';

function Child({ count, incrementByTwo }) {
  console.log('Child is rendering');

  return (
    <div>
      <div>Child Component: {count}</div>
      <button onClick={incrementByTwo}>+2</button>
      <div>
        <GrandChild />
      </div>
    </div>
  );
}

export default memo(Child);
