import React, { useState } from 'react';
import useDictionary from './hooks/useDictinary';

const App = () => {
  const [count, setCount] = useState(0);
  const data = useDictionary(); // Calling the custom hook

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>
        Click ME! {count}
      </button>
      {data}
    </div>
  );
};

export default App;
