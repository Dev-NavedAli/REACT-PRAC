import React, { useEffect, useState } from 'react';
import styled from "styled-components"
function App() {
  const DynamicButton = styled.button`
    color: white;
    background-color: blue;
  `;

  return <DynamicButton>Click Me</DynamicButton>;
}


export default App;
