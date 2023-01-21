import Footer from "components/Footer/footer";
import Navbar from "components/Navbar";
import { Outlet } from "react-router-dom";
import styles from "./pagina_padrao.module.scss";

export default function PaginaPadrao() {
  return (
    <section className={styles.container}>
      <Navbar />
      <div className={styles["container--outlet"]}>
        <Outlet />
      </div>
      <Footer />
    </section>
  )
}