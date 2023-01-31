import Header from "components/Header/header";
import Item from "components/Item/item";
import { useSelector } from "react-redux";
import styles from "./carrinho.module.scss";

function Carrinho() {

  const { carrinho, total } = useSelector(state => {
    let total = 0;
    const carrinho = state.carrinho.reduce((itens, itemNoCarrinho) => {
      const item = state.itens.find(item => item.id === itemNoCarrinho.id);
      total += (item.preco * itemNoCarrinho.quantidade);
      const regex = new RegExp(state.busca, "i");
      if(item.titulo.match(regex)) {
        itens.push({
          ...item,
          quantidade: itemNoCarrinho.quantidade
        });
      }
      return itens;
    }, []);
    return {
      carrinho,
      total
    };
  });

  return (
    <section>
      <Header
        titulo="Carrinho de compras"
        descricao="Confira produtos que você adicionou ao carrinho"
      />
      <div className={styles.carrinho}>
        {carrinho?.map(item => <Item key={item.id} {...item} carrinho />)}
        <div className={styles.total}>
          <strong>Resumo da compras</strong>
          <span>
            Subtotal: <strong> R$ {total.toFixed(2)} </strong>
          </span>
        </div>
      </div>
    </section>
  )
}

export default Carrinho;