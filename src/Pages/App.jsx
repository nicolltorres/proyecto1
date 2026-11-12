import Tar from "./Tar";
import FormularioPage from "./formularioPage";
import Inicio from "./inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useTarjetas from "../Hook/useTarjetas";

export default function App() {
   const {tarjeta, agregar}=useTarjetas()
    return (
        <BrowserRouter>
           <Routes>
              <Route path="/" element={<Inicio/>} />
              <Route path="/Tar" element={<Tar tarjeta={tarjeta}/>} />
              <Route path="/Formulario" element={<FormularioPage agregar={agregar}/>} />
           </Routes>
        </BrowserRouter>
    )
}