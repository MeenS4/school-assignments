import styles from './Counter.module.scss';

export default function Counter({ counter }) {
  return <div className={styles['counter']}>{counter}</div>;
}
