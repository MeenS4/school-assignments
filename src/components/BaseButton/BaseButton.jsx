import styles from './BaseButton.module.scss';

export default function BaseButton({ text, onUpdateCounter }) {
  return (
    <div className={styles['button']} onClick={() => onUpdateCounter(text)}>
      {text}
    </div>
  );
}
