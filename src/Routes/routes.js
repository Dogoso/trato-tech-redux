import PaginaPadrao from "components/PaginaPadrao/pagina_padrao";
import Anuncie from "pages/Anuncie/anuncie";
import Carrinho from "pages/Carrinho/carrinho";
import Categoria from "pages/Categoria/categoria";
import Home from "pages/Home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="/categoria/:idCategoria/" element={<Categoria />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/anuncie" element={<Anuncie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}