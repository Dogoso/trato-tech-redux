import Header from "components/Header/header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Item from "components/Item/item";
import styles from "./categoria.module.scss";

function Categoria() {

  const params = useParams();
  const { categoria, itens } = useSelector(state => {
    const regex = new RegExp(state.busca, "i");
    return {
      categoria: state.categorias.find(categoria => categoria.id === params.idCategoria),
      itens: state.itens.filter(item => item.categoria === params.idCategoria && item.titulo.match(regex))
    }
  });

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