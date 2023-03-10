import styles from './item.module.scss';
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineCheck,
  AiFillEdit
} from 'react-icons/ai';
import {
  FaCartPlus
} from 'react-icons/fa';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { atualizarFavorito, atualizarItem } from 'Store/reducers/itens';
import { alterarQuantidade, mudarCarrinho } from 'Store/reducers/carrinho';
import { useState } from 'react';
import Input from 'components/Input/input';

const iconeProps = {
  size: 24,
  color: '#041833',
};

const quantidadeProps = {
  size: 32,
  color: '#1875E8'
} 

export default function Item(props) {


  const {
    titulo,
    foto,
    preco,
    descricao,
    favorito,
    id,
    carrinho,
    quantidade
  } = props;

  const [modoEdicao, setModoEdicao] = useState(false);
  const [novoTitulo, setNovoTitulo] = useState(titulo);

  const isInCarrinho = useSelector(state => state.carrinho.some(item => item.id === id));
  const dispatch = useDispatch();

  function atualizarCurFavorito() {
    dispatch(atualizarFavorito(id));
  }

  function resolverCarrinho() {
    dispatch(mudarCarrinho(id));
  }

  return (
    <div className={classNames(styles.item, {
      [styles.itemNoCarrinho]: carrinho,
    })}>
      <div className={styles['item-imagem']}>
        <img src={foto} alt={titulo} className={styles['item-imagem-tag']} />
      </div>
      <div className={styles['item-descricao']}>
        <div className={styles['item-titulo']}>
          {modoEdicao ? <Input value={novoTitulo} onChange={setNovoTitulo} /> : <h2>{titulo}</h2>}
          <p>{descricao}</p>
        </div>
        <div className={styles['item-info']}>
          <div className={styles['item-preco']}>
            R$ {preco.toFixed(2)}
          </div>
          <div className={styles['item-acoes']}>
            {favorito ? (
              <AiFillHeart {...iconeProps} color='#ff0000' className={styles['item-acao']} onClick={atualizarCurFavorito} />
            ) : (
              <AiOutlineHeart {...iconeProps} className={styles['item-acao']} onClick={atualizarCurFavorito} />
            )}
            {carrinho ? (
              <div className={styles.quantidade}>
                <AiFillMinusCircle {...quantidadeProps} onClick={() => {
                  if(quantidade > 0) {
                    dispatch(alterarQuantidade({ id, quantidade: -1 }))
                  }
                }} />
                {String(quantidade).padStart(2, "0")}
                <AiFillPlusCircle {...quantidadeProps} onClick={() => dispatch(alterarQuantidade({ id, quantidade: +1 }))} />
              </div>
            ) : (
              <FaCartPlus
                {...iconeProps}
                color={isInCarrinho ? '#1875E8' : iconeProps.color}
                className={styles['item-acao']}
                onClick={resolverCarrinho}
              />
            )}
            {modoEdicao ? <AiOutlineCheck 
              {...iconeProps} 
              className={styles['item-acao']} 
              onClick={() => {
                dispatch(atualizarItem({
                  id,
                  item: {
                    titulo: novoTitulo
                  }
                }));
                setModoEdicao(false);
              }}
            /> : <AiFillEdit 
              {...iconeProps} 
              className={styles['item-acao']} 
              onClick={() => setModoEdicao(true)}
            /> }
          </div>
        </div>
      </div>
    </div>
  )
}