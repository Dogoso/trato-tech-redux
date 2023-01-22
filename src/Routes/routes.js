import PaginaPadrao from "components/PaginaPadrao/pagina_padrao";
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
                </Route>
            </Routes>
        </BrowserRouter>
    )
}