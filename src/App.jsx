import { useState } from 'react';
import './App.scss';
import styles from './App.module.scss';

import BaseButton from './components/BaseButton/BaseButton';
import Counter from './components/Counter/Counter';

export default function App() {
  const [counter, setCounter] = useState(0);

  function handleUpdateCounter(symbol) {
    if (symbol === '+') {
      let newCounter = counter + 1;
      setCounter(newCounter);
    } else {
      let newCounter = counter - 1;
      setCounter(newCounter);
    }
  }

  function handleBackgroundColorChange() {
    if (counter > 0) return 'red-bg';

    if (counter < 0) return 'blue-bg';

    if (counter === 0) return 'neutral-bg';
  }

  return (
    <div
      className={`${styles['container']} ${
        styles[handleBackgroundColorChange()]
      }`}
    >
      <BaseButton text='-' onUpdateCounter={handleUpdateCounter} />
      <Counter counter={counter} />
      <BaseButton text='+' onUpdateCounter={handleUpdateCounter} />
    </div>
  );
}
