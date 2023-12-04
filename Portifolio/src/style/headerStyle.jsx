import styled from "styled-components";



export const StyleHeader = styled.header`
background-color:black;
height:12vh;
display:flex;
align-items:center;
justify-content:center;

`

export const Navegacao = styled.ul`
display:flex;
list-style:none;
border:solid 1px;
width: 40vw;
justify-content : space-around;


@media (max-width:800){
    width:80vw;
    font-size: 20px;
}

a{
    text-decoration: none;
    color:red;
}
`