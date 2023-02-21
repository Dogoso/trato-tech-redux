import Header from "components/Header/header";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Item from "components/Item/item";
import styles from "./categoria.module.scss";
import Button from "components/Button/button";

function Categoria() {

  const params = useParams();
  const navigate = useNavigate();
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
          >
            <Button onClick={() => navigate(`/anuncie/${params.idCategoria}/`)}>
              Quero anunciar!
            </Button>
          </Header>
          <section className={styles.itens}>
            {itens?.map(item => <Item key={item.id} {...item} />)}
          </section>
        </>
      ) : "Error 404!"}
    </section>
  )
}

export default Categoria;