import Header from "components/Header/header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Categoria() {

  const params = useParams();
  const categoria = useSelector(state => state.categorias.find(categoria => categoria.id === params.idCategoria));

  return (
    <section>
      {params.idCategoria ? (
        <Header
          titulo={categoria.nome}
          descricao={categoria.descricao}
          imagem={categoria.header}
        />
      ) : "Error 404!"}
    </section>
  )
}

export default Categoria;