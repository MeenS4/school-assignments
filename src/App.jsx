import { useState } from 'react';
import './App.scss';
import styles from './App.module.scss';

import BaseButton from './components/BaseButton/BaseButton';

export default function App() {
  const [color, setColor] = useState('#FFFFFF');
  const [value, setValue] = useState('#FFFFFF');

  let style = {
    backgroundColor: color,
  };

  function handleColorInputChange(newValue) {
    setValue(newValue);
  }

  function generateRandomHex() {
    let randomHex = '';

    for (let i = 0; i < 6; i++) {
      const randomDigit = Math.floor(Math.random() * 16);
      randomHex += randomDigit.toString(16);
    }

    return randomHex;
  }

  function handleSetBackgroundColor() {
    setColor(value);
  }

  return (
    <div className={styles['container']} style={style}>
      <div className={styles['hex']}>#</div>
      <input
        className={styles['color-input']}
        type='text'
        onChange={(event) => handleColorInputChange(event.target.value)}
      />
      <BaseButton text='Set background' onClick={handleSetBackgroundColor} />
    </div>
  );
}
