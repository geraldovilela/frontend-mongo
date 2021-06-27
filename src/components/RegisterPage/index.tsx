import { useCallback, useRef } from 'react';
import { ContainerLogin, Content, Background } from './styles'
import {FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'
import {Form} from "@unform/web"
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from "../utils/getValidationErrors";

import {Button} from "../Button/index"
import {Input} from "../Input/index"

const RegisterPage: React.FC = () => {
  const formRef = useRef<FormHandles>(null); 
  
    
  const handleSubmit= useCallback(async(data:object) =>{
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required("Campo nome é obrigatorio"),
          email: Yup.string().required("E-mail é obrigatorio").email("Favor informar email valido"),
          password: Yup.string().min(6,"A senha precisa de ao menos 6 caracteres.")
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

          <Form ref={formRef}onSubmit={handleSubmit}>
            <h1>Faça seu Registro no MyProducts</h1>
            <Input name="name" icon={FiUser} placeholder="Nome"></Input>
            <Input name="email" icon={FiMail} placeholder="E-mail"></Input>
            <Input name="password" icon={FiLock} type="password"placeholder="Senha"></Input>
            <Button type="submit">Cadastrar</Button>
          </Form>

          <a href="/register">
            <FiArrowLeft/>
            Voltar para Logon
          </a>
      </Content>
      <Background/>
    </ContainerLogin>
  )
}

export {RegisterPage};