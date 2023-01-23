import Header from "components/Header/header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Item from "./Components/item";
import styles from "./categoria.module.scss";

function Categoria() {

  const params = useParams();
  const { categoria, itens } = useSelector(state => ({
    categoria: state.categorias.find(categoria => categoria.id === params.idCategoria),
    itens: state.itens.filter(item => item.categoria === params.idCategoria)
  }));

  return (
    <section>
      {params.idCategoria ? (
        <>
          <Header
            titulo={categoria.nome}
            descricao={categoria.descricao}
            imagem={categoria.header}
          />
          <section className={styles.itens}>
            {itens?.map(item => <Item key={item.id} {...item} />)}
          </section>
        </>
      ) : "Error 404!"}
    </section>
  )
}

export default Categoria;