import { useState } from 'react';

// 1. type
type ClickType = () => void;
type JSXElement = () => JSX.Element;
// 2. interface
interface IClickType {
  (): void;
}
interface IJSXElement {
  (): JSX.Element;
}

const ToggleSwitch: IJSXElement | JSXElement = () => {
  // ts 자리
  const [isOn, setIsOn] = useState<boolean>(false);
  const handleClick: ClickType | IClickType = () => {
    setIsOn(!isOn);
  };
  // tsx 자리
  return (
    <div>
      <h2>ToggleSwitch : {isOn ? '밝아요' : '어두워요'}</h2>
      <div>
        <button onClick={handleClick}>토글</button>
      </div>
    </div>
  );
};

export default ToggleSwitch;
