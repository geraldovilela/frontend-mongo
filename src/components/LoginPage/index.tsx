import { ContainerLogin, Content, Background } from './styles'

import {FiLogIn, FiLock, FiMail} from 'react-icons/fi'
import {Form} from "@unform/web"

import {Button} from "../Button/index"
import {Input} from "../Input/index"
import { useCallback } from 'react'
import { useRef } from 'react'
import * as Yup from 'yup'
import getValidationErrors from '../utils/getValidationErrors'
import { FormHandles } from '@unform/core'

const LoginPage: React.FC=()=> {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit= useCallback(async(data:object) =>{
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required("E-mail é obrigatorio").email("Favor informar email valido"),
        password: Yup.string().required("Senha é obrigatoria")
      })

      await schema.validate(data,
        { abortEarly:false }
        );
      
    } catch (err){        
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors)
    }
  },[])

  return (
    <ContainerLogin>
      <Content>
          <h1>MyProducts</h1>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>
            <Input name="email" icon={FiMail} placeholder="E-mail"></Input>
            <Input name="password" icon={FiLock} type="password"placeholder="Senha"></Input>
            <Button type="submit">Entrar</Button>
          </Form>

          <a href="/register">
            <FiLogIn/>
            Criar Conta
          </a>
      </Content>
      <Background/>
    </ContainerLogin>
  )
}

export {LoginPage};