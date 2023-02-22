import Button from "components/Button/button";
import Header from "components/Header/header";
import Input from "components/Input/input";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { adicionarItem } from "Store/reducers/itens";
import styles from "./anuncie.module.scss";

export default function Anuncie() {

  const dispatch = useDispatch();
  const { idCategoria = "" } = useParams();
  const categorias = useSelector(state => state.categorias.map(({ nome, id }) => ({ nome, id })))
  const { register, handleSubmit } = useForm({
    defaultValues: {
      categoria: idCategoria
    }
  });

  function onFormSubmit(data) {
    dispatch(adicionarItem(data));
    alert("Produto cadastrado com sucesso!");
    resetInputs();
  }

  function resetInputs() {
    
  }

  return (
    <section>
      <Header
        titulo="Anuncie aqui!"
        descricao="Anuncie seu produto no melhor site do Brasil"
      />
      <form onSubmit={handleSubmit(onFormSubmit)} className={styles.form}>
        <Input {...register("titulo", { required: true })} placeholder="Nome do produto" type="text" />
        <Input {...register("descricao", { required: true })} placeholder="Descrição do produto" type="text" />
        <Input {...register("foto", { required: true })} placeholder="URL da imagem do produto" type="text" />
        <select 
          {...register("categoria", { required: true })} 
          className={styles.input}
          disabled={!!idCategoria}
        >
          <option value="" disabled>Selecione a categoria</option>
          {categorias.map(categoria => <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>)}
        </select>
        <Input {...register("preco", { required: true, valueAsNumber: true })} placeholder="Preço" type="number" />
        <Button type="submit">Cadastrar produto</Button>
      </form>
    </section>
  )
}