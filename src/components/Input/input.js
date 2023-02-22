import { forwardRef } from "react";
import styles from "./input.module.scss";

function Input({ value, onChange, ...props }, ref) {
    return <input 
        value={value}
        onChange={e => onChange(e.target.value)}
        className={styles.input}
        ref={ref}
        {...props}
    />
}

export default forwardRef(Input);