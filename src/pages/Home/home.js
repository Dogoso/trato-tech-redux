import Header from "components/Header/header";
import styles from "./home.module.scss";
import relogio from "assets/inicial.png";

export default function Home() {
    return (
        <div>
            <Header
                titulo="Classificados Tech"
                descricao="Compre diversos tipos de produto no melhor site do Brasil"
                className={styles.header}
                imagem={relogio}
            />
        </div>
    )
}