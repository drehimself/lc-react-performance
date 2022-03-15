import { useMemo, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([1, 2, 3]);

  console.log('I am rendering');

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  function addNumbers() {
    console.log('I take long to compute.');
    for (let index = 0; index < 2_000_000_000; index++) {} // simulate slowness
    return arr.reduce((a, b) => a + b, 0);
  }

  const memoizedAddNumbers = useMemo(addNumbers, [arr]);

  function changeArray() {
    setArr([1, 2, 3, 4]);
  }

  return (
    <div className="App">
      <div>
        <div>Count: {count}</div>
        <button onClick={increment}>Increment</button>
      </div>
      <div style={{ marginTop: '60px' }}>
        <button onClick={changeArray}>Change Array of Numbers</button>
        <div>Expensive Computation: {memoizedAddNumbers}</div>
      </div>
    </div>
  );
}

export default App;
