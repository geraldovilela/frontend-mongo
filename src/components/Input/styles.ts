import styled, { css } from "styled-components";

import {Tooltip} from "../Tooltip/index";

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError:boolean;
}

export const Container = styled.div<IContainerProps>`
    background: #232129;
    border-radius: 10px;
    padding: 16px;
    width: 100%;
    display: flex;
    align-items: center;
    
    border: 2px solid #232129;

    & + div {
        margin-top: 8px;
      }
      ${props => props.hasError && css`
        border-color:#c53030;
      `}

      ${props => props.isFocused && css`
        color:#ff9900;
        border-color:#ff9900;
      `}

      ${props => props.isFilled && css`
        color:#ff9900;
      `}
    input {     
      
      flex:1;
      border: 0;
      background: transparent;
      color:#f4ede8;

      &::placeholder{
        color:#ffffff;
      }
      
    }

    svg{
      margin-right: 16px;
    }
`;

export const Errors = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg{
    margin: 0px;  
}
  span{
    background-color: #c53030;
    color: #fff;

    &::before {
      border-color:#c53030 transparent;
    }
  }

`

