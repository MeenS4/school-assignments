import styles from './BaseButton.module.scss';

export default function BaseButton({ text, onClick }) {
  return (
    <div className={styles['button']} onClick={onClick}>
      {text}
    </div>
  );
}
