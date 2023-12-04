import React from 'react';
import {Img,Container,Sessao} from "../style/projetosStyle";
import { Link } from 'react-router-dom';
import Bateria from "../assets/bateria.png"
import Cadastro from "../assets/cadastro.png";
import Urna from "../assets/urna.png";



export default  function Projetos () {
return(
  <section>
  <h2>Projetos</h2>
  <Sessao>
  <Container>
      <figure>
   <a href='https://github.com/rafaelbenitezduartesharp/Bateria'><Img src={Bateria} alt="" /></a>
      </figure>
      <h2>Bateria</h2>
      <h3>Descrição</h3>
      <p>JAVASCRIPT</p>
  </Container>

  <Container>
  <figure>
  <a href='https://github.com/rafaelbenitezduartesharp/tela-de-cadastro/tree/main'><Img src={Cadastro} alt="" /></a>
      </figure>
      <h2>Cadastro</h2>
      <h3>Descrição</h3>
      <p>JAVASCRIPT</p>
  </Container>
  

 

  <Container>
      <figure>
      <a href='https://github.com/rafaelbenitezduartesharp/Urna'><Img src={Urna} alt="" /></a>  
      </figure>
      <h2>Urna</h2>
      <h3>Descrição</h3>
      <p>JAVASCRIPT</p>
  </Container>
  </Sessao>
  <div>
<Link to="/">Voltar para a página inicial</Link>
</div>
  </section>
  
  
)
}





