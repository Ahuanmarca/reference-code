import styles from './Sidenote.module.css';

function Sidenote({ title, children }) {
  console.log(styles);
  return (
    <aside className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <p>{children}</p>
    </aside>
  );
}

export default Sidenote;