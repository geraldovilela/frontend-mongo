import { ContainerLogin, Content, Background } from './styles'
import { useCallback, useRef } from 'react'
import { Form } from "@unform/web"
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'


import { Link } from 'react-router-dom'
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi'
import { useAuth } from '../../context/AuthContext'
import { Button } from "../Button/index"
import { Input } from "../Input/index"
import getValidationErrors from '../utils/getValidationErrors'

interface iSignInFormData {
  email: string;
  password: string;
}


const LoginPage: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const handleSubmit = useCallback(async (data: iSignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required("E-mail é obrigatorio").email("Favor informar email valido"),
        password: Yup.string().required("Senha é obrigatoria")
      })

      await schema.validate(data,
        { abortEarly: false }
      );
      signIn({
        email: data.email,
        password: data.password
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors)
    }
  }, [signIn])

  return (
    <ContainerLogin>
      <Content>
        <h1>MyProducts</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail"></Input>
          <Input name="password" icon={FiLock} type="password" placeholder="Senha"></Input>
          <Button type="submit">Entrar</Button>
        </Form>

        <Link to="/register">
          <FiLogIn />
          Criar Conta
        </Link>
      </Content>
      <Background />
    </ContainerLogin>
  )
}

export { LoginPage };