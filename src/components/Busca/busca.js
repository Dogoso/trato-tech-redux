import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { buscar, resetarBusca } from "Store/reducers/busca";
import styles from "./busca.module.scss";

export default function Busca() {

  const curBusca = useSelector(state => state.busca);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(resetarBusca());
  }, [location.pathname, dispatch])

  return (
    <section role="search" className={styles.busca}>
      <input
        className={styles.input}
        placeholder="O que você procura?"
        value={curBusca}
        onChange={e => dispatch(buscar(e.target.value))}
      />
    </section>
  )
}