
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Inicio from "./components/Inicio"
import Projetos from "./components/Projetos"
import Sobre from "./components/Sobre"
import {GlobalStyle} from "./style/global"
export default function App() {
  return (
    <main>
      <GlobalStyle/>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/Projetos" element={<Projetos />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}
