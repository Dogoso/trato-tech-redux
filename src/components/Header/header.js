import styles from './header.module.scss';
import TituloComImagem from './TituloComImagem/titulo_com_imagem';
import TituloSemImagem from './TituloSemImagem/titulo_sem_imagem';

export default function Header({ titulo, descricao, className = '', imagem }) {
  return (
    <header className={styles.header}>
      {titulo && !imagem &&
        <TituloSemImagem
          titulo={titulo}
          descricao={descricao}
        />
      }
      {titulo && imagem &&
        <TituloComImagem
          titulo={titulo}
          descricao={descricao}
          imagem={imagem}
          className={className}
        />
      }
    </header>
  )
}