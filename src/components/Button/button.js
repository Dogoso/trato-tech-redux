import styles from "./button.module.scss";

export default function Button({ children, type, onClick }) {
    return <button 
        onClick={onClick} 
        className={styles.button} 
        type={type}
    >{children}</button>
}