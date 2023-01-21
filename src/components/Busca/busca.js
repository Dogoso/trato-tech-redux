import styles from "./busca.module.scss";

export default function Busca() {
  return (
    <section role="search" className={styles.busca}>
      <input
        className={styles.input}
        placeholder="O que você procura?"
      />
    </section>
  )
}