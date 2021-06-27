import styled from "styled-components";

import signInBackground from "../../assets/signInBackgroundExample.png"
import {shade} from 'polished';

export const ContainerLogin = styled.section`
  height: 100vh;
  display: flex;
  align-items: stretch;
  
 `

export const Content = styled.section`
 display: flex;
 align-items: center;
 flex-direction: column;
 place-content: center;

 width: 100%;
 max-width: 700px;
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    
    h1 {
      margin-bottom: 24px;
    }
    
  }
  > a {
    font-weight: bold;
    color: #ff9909;
    display:block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.3s;

    display:flex;
    align-items: center;

    &:hover {
        color:${shade(0.2, "#ff9900")};
      }

    svg {
      margin: 16px;
    }
  }
 `

export const Background = styled.aside`
 flex:1;
 background: url(${signInBackground}) no-repeat center ;
 background-size: cover;
 `