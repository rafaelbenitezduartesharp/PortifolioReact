import styled from "styled-components";

export const Img = styled.img`
width:30vw;
border-top-right-radius: 20px;
border-bottom-left-radius: 20px;

`

export const Sessao = styled.div`
display:flex;
height: 88vh;
align-items: center;
justify-content: space-around;

@media (max-width:800px){
    flex-direction: column;
}

`

export const Container = styled.section`
width:30vh;
background-color: red;
border: 20px;

`