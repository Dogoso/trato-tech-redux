import Header from "components/Header/header";
import Item from "pages/Categoria/Components/item";
import { useSelector } from "react-redux";
import styles from "./carrinho.module.scss";

function Carrinho() {

  const carrinho = useSelector(state => {
    const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {
      const item = state.itens.find(item => item.id === itemNoCarrinho.id);
      itens.push({
        ...item,
        quantidade: itemNoCarrinho.quantidade
      });
      return itens;
    }, []);
    return carrinhoReduce;
  });

  return (
    <section>
      <Header
        titulo="Carrinho de compras"
        descricao="Confira produtos que você adicionou ao carrinho"
      />
      <div className={styles.carrinho}>
        {carrinho?.map(item => <Item key={item.id} {...item} carrinho />)}
      </div>
      <div className={styles.total}>
        <strong>Resumo da compras</strong>
        <span>
          Subtotal: <strong> R$ {0.0.toFixed(2)} </strong>
        </span>
      </div>
    </section>
  )
}

export default Carrinho;