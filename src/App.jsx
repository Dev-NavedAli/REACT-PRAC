import React, { useEffect, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  // Log when the count changes
  useEffect(() => {
    console.log('Button clicked');
  }, [count]);

  const buttonStyle = {
    color: 'red',
    backgroundColor: 'white',
    fontWeight: 'bold', // Fixed invalid CSS property
  };

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button style={buttonStyle} onClick={handleClick}>
        Click ME! {count}
      </button>
    </>
  );
};

export default App;
