/* eslint-disable prettier/prettier */
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import Logo from '../../assets/logo-removebg-preview.png'
import { Button } from '../../components'
import { api } from '../../services/api'
import {
  Container,
  LeftContainer,
  RighContainer,
  Title,
  Form,
  InputContainer,
  Link,
} from './styles'

export function Register() {
  const Schema = yup
    .object({
      name: yup.string().required('O campo nome é obrigatório'),
      email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('Campo de e-mail obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('Campo senha obrigatorio'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
        .required('Confirme sua senha'),
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  })

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        },
      )
      if (status === 200 || status === 201) {
        toast.success('Conta criada com sucesso!')
      } else if (status === 409) {
        toast.error('E-mail já cadastrado! Faça o login para continuar')
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error('Algo deu errado! Por favor tente novamente')
    }
  }

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-burger" />
      </LeftContainer>
      <RighContainer>
        <Title>Criar conta</Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome</label>
            <input type="text" {...register('name')} />
            <p>{errors?.name?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>E-mail</label>
            <input type="email" {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Confirmar senha</label>
            <input type="password" {...register('confirmPassword')} />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>

          <Button type="submit">Criar Conta</Button>
        </Form>
        <p>
          Já possui conta? <Link to="/login">Clique aqui.</Link>
        </p>
      </RighContainer>
    </Container>
  )
}
