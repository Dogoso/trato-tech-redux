import Header from "components/Header/header";
import { useSelector } from "react-redux";

export default function Anuncie() {

  const categorias = useSelector(state => state.categorias.map(({ nome, id }) => ({ nome, id })))

  return (
    <section>
      <Header
        titulo="Anuncie aqui!"
        descricao="Anuncie seu produto no melhor site do Brasil"
      />
      <form>
        <input placeholder="Nome do produto" type="text" />
        <input placeholder="Descrição do produto" type="text"  />
        <input placeholder="URL da imagem do produto" type="text"  />
        <select>
          <option value="" disabled>Selecione a categoria</option>
          {categorias.map(categoria => <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>)}
        </select>
        <input placeholder="Preço" type="number"  />
        <button type="submit">Cadastrar produto</button>
      </form>
    </section>
  )
}