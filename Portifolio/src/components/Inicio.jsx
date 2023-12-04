import React from "react";
import Rafa from "../assets/Perfil.jpg"
import { Img, Sessao, Div} from "../style/inicioStyle"
import Instagram from "../assets/instagram.svg"
import Linkedin from "../assets/linkedin.svg"
import Whats from "../assets/whatsapp.svg"
import Github from "../assets/github.svg"
function Inicio() {
    return (
        <Sessao>
            <figure>
                <Img src={Rafa} alt="Minha foto" />
            </figure>
            <Div>
                <h1>Olá eu sou o Rafael </h1>
                <h3>Desenvolvedor Front-End</h3>
                <figure>
                    <a href="https://www.instagram.com" target="_blank">
                        <img src={Instagram} alt="" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank">
                        <img src={Linkedin} alt="" />
                    </a>
                    <a href="https://wa.me/">
                         <img src={Whats} alt="" />
                    </a>
                    <a href="https://github.com" target="_blank">
                         <img src={Github} alt="" />
                    </a>
                   
                </figure>
            </Div>
        </Sessao>
    )
}

export default Inicio