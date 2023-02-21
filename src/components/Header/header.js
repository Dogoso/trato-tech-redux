import styles from './header.module.scss';
import TituloComImagem from './TituloComImagem/titulo_com_imagem';
import TituloSemImagem from './TituloSemImagem/titulo_sem_imagem';

export default function Header({ titulo, descricao, className = '', imagem, children }) {
  return (
    <header className={styles.header}>
      {titulo && !imagem &&
        <TituloSemImagem
          titulo={titulo}
          descricao={descricao}
        >{children}</TituloSemImagem>
      }
      {titulo && imagem &&
        <TituloComImagem
          titulo={titulo}
          descricao={descricao}
          imagem={imagem}
          className={className}
        >{children}</TituloComImagem>
      }
    </header>
  )
}