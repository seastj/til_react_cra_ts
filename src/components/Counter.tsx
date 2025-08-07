import { useState } from 'react';

// 2번이상 반복되고, 가독성이 떨어진다.
// 1. type 으로 정의해 보자.
type VoidFunction = () => void;
type JSXElement = () => JSX.Element;

// 2. interface 로 정의해 보자.
interface IVoidFunctin {
  (): void;
}
interface IJSXElement {
  (): JSX.Element;
}

const Counter: IJSXElement | JSXElement = (): JSX.Element => {
  // ts
  const [count, setCount] = useState<number>(0);

  const handleAdd: IVoidFunctin | VoidFunction = () => {
    setCount(count + 1);
  };
  const handleMinus: IVoidFunctin | VoidFunction = () => {
    setCount(count - 1);
  };
  const handleReset: IVoidFunctin | VoidFunction = () => {
    setCount(0);
  };

  // tsx
  return (
    <div>
      <h2>Counter : {count}</h2>
      <button onClick={handleAdd}>증가</button>
      <button onClick={handleMinus}>감소</button>
      <button onClick={handleReset}>초기화</button>
    </div>
  );
};

export default Counter;
