import { useCallback, useState } from 'react';
import Child from './Child';

function App() {
  const [count, setCount] = useState(0);
  const [anotherCount, setAnotherCount] = useState(100);

  console.log('Parent is rendering');

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  function incrementAnother() {
    setAnotherCount(prevCount => prevCount + 1);
  }

  function incrementByTwo() {
    setCount(prevCount => prevCount + 2);
  }

  const memoizedIncrementByTwo = useCallback(incrementByTwo, []);

  return (
    <div>
      <div>
        <div>Count: {count}</div>
        <button onClick={increment}>Increment</button>
      </div>
      <div>
        <div>Another Count: {anotherCount}</div>
        <button onClick={incrementAnother}>Increment Another</button>
      </div>
      <div style={{ marginTop: '60px' }}>
        {/* <Child count={count} incrementByTwo={incrementByTwo} /> */}
        <Child count={count} incrementByTwo={memoizedIncrementByTwo} />
      </div>
    </div>
  );
}

export default App;
