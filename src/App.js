import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Const from './Const';
import Multiple from './Multiple';

const App = () => {
  const [count, setCount] = useState(0);
  const [double, setDouble] = useState(1);
  const [maxValue, setMaxValue] = useState(Const.initMax);
  const [multiple, setMultiple] = useState(1);

  const reachedMaxValue = (count, maxValue) => {
    if (maxValue <= count) return true;
  };

  useEffect(() => {
    document.title = `you clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    console.log(`you clicked ${double} times`);
  });
  useEffect(() => {
    if (reachedMaxValue(count, maxValue)) {
      setMaxValue(Math.ceil(maxValue * 1.5));
      setCount(0);
    }
  }, [count, maxValue]);

  useEffect(() => {
    console.log(`multiple: ${multiple}`);
  },[multiple]);
  const addTranslated = (count) => {
    return `${count} 만큼 눌렀습니다.`;
  };

  return (
    <Wrapper>
      <Text>You clicked {count} times</Text>
      <Text>{addTranslated(count)}</Text>
      <Text>double count: {double}</Text>
      <Button onClick={() => setCount(count + (1 * multiple))}>click!</Button>
      <Button onClick={() => setDouble(double * (2 * multiple))}>double!</Button>
      <Multiple onChange={(e) => setMultiple(e)}></Multiple>
      <progress id="file" value={count} max={maxValue}></progress>
      <Text>{count}/{maxValue}</Text>
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
