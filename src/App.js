import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const App = () => {
  const [count, setCount] = useState(0);
  const [double, setDouble] = useState(1);
  useEffect(() => {
    document.title = `you clicked ${count} times`;
  }, [double])
  useEffect(() => {
    console.log(`you clicked ${double} times`);
  })

  const addTranslated = (count) => {
    return `${count} 만큼 눌렀습니다.`
  }

  return (
    <Wrapper>
      <Text>You clicked {count} times</Text>
      <Text>{addTranslated(count)}</Text>
      <Text>double count: {double}</Text>
      <Button onClick={() => setCount(count + 1)}>click!</Button>
      <Button onClick={() => setDouble(double * 2)}>double!</Button>
      <progress id="file" value={count} max="100"></progress>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
`;

const Text = styled.p`
`;

const Button = styled.button`

`;

export default App;
