/* eslint-disable prettier/prettier */
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import Logo from '../../assets/logo-removebg-preview.png'
import { useUser } from '../../hooks/UserContext'
import { api } from '../../services/api'
import {
  Container,
  LeftContainer,
  RighContainer,
  Title,
  Form,
  InputContainer,
  Link,
  Button,
} from './styles'

export function Login() {
  const history = useNavigate()
  const { put_user_data } = useUser()

  const Schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('Campo de e-mail obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('Campo senha obrigatorio'),
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  })

  const onSubmit = async (data1) => {
    const { data } = await toast.promise(
      api.post('/sessions', {
        email: data1.email,
        password: data1.password,
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja bem vindo(a)!',
        error: 'E-mail ou senha Incorretos',
      },
    )

    put_user_data(data)

    setTimeout(() => {
      history('/')
    }, 1000)
  }

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-burger" />
      </LeftContainer>
      <RighContainer>
        <Title>
          Olá, seja bem vindo ao <span>Thomas Burguer!</span>
          <br /> Acesse com seu <span>Login e senha.</span>
        </Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <Button type="submit">Entrar</Button>
        </Form>
        <p>
          Não possui conta? <Link to="/cadastro">Clique aqui.</Link>
        </p>
      </RighContainer>
    </Container>
  )
}
