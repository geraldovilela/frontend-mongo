import { ContainerLogin, ButtonContainer } from './styles'

export function LoginPage() {



  return (
    <ContainerLogin>
      <h2 >Bem vindo ao MyProducts</h2>
      <form>
        <div className="container-input">
          <p>Usuario ou Email de Acesso:</p>
          <input placeholder="Ensira seu login"></input>
        </div>
        <div className="container-input">
          <p>Senha:</p>
          <input type="password" placeholder="Ensira a senha"></input>
        </div>
        <ButtonContainer >
          <button>Entrar</button>
          <button>Cadastrar</button>
        </ButtonContainer>
      </form>

    </ContainerLogin>
  )
}