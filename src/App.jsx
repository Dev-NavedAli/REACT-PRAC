import React, { useState } from 'react';
import useDictionary from './hooks/useDictinary';
import { counterContext } from './context/context.js';
import Any from './components/Any.jsx';

const App = () => {
  const [count, setCount] = useState(0);
  const data = useDictionary(); // Calling the custom hook

  const handleClick = (event) => {
    setCount(count + 1);
    console.log('Synthetic event:', event);
    console.log('Native event:', event.nativeEvent);
  };

  return (
    <div>
      <counterContext.Provider value={count}>
         <Any/>
      </counterContext.Provider>
      
      <button onClick={handleClick}>
        Click ME! {count}
      </button>
      {data}
    </div>
  );
};

export default App;
