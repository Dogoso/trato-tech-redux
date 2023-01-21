import PaginaPadrao from "components/PaginaPadrao/pagina_padrao";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPadrao />}>
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}