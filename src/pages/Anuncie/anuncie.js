import Button from "components/Button/button";
import Header from "components/Header/header";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import styles from "./anuncie.module.scss";

export default function Anuncie() {

  const categorias = useSelector(state => state.categorias.map(({ nome, id }) => ({ nome, id })))
  const { register, handleSubmit } = useForm();

  function onFormSubmit(params) {
    console.log(params);
  }

  return (
    <section>
      <Header
        titulo="Anuncie aqui!"
        descricao="Anuncie seu produto no melhor site do Brasil"
      />
      <form onSubmit={handleSubmit(onFormSubmit)} className={styles.form}>
        <input {...register("name")} placeholder="Nome do produto" type="text" className={styles.input} />
        <input {...register("description")} placeholder="Descrição do produto" type="text" className={styles.input} />
        <input {...register("img")} placeholder="URL da imagem do produto" type="text" className={styles.input} />
        <select {...register("category")} className={styles.input}>
          <option value="" disabled>Selecione a categoria</option>
          {categorias.map(categoria => <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>)}
        </select>
        <input {...register("price")} placeholder="Preço" type="number" className={styles.input} />
        <Button type="submit">Cadastrar produto</Button>
      </form>
    </section>
  )
}