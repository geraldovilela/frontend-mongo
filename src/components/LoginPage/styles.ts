import styled from "styled-components";

export const ContainerLogin = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 ;
  p{
    font-style: bold;
    font-size: 18px;
  }
  input{
    height: 30px;
    width: 100%;
  }

  div#button-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 3px;
  }
`
export const ButtonContainer = styled.div`
   display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 3px;
`