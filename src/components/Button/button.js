import styles from "./button.module.scss";

export default function Button({ children, type }) {
    return <button className={styles.button} type={type}>{children}</button>
}