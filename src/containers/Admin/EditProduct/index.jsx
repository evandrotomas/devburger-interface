/* eslint-disable prettier/prettier */

import { yupResolver } from '@hookform/resolvers/yup';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify';
import * as Yup from 'yup'

import { ErrorMessage } from '../../../components/ErrorMessage'
import { api } from '../../../services/api'
import { Container, Label, Input, ButtonStyles, LabelUpload, ContainerInput } from './styles'

export function EditProduct() {
  const [file_name, set_file_name] = useState(null)
  const [categories, set_categories] = useState([])
  const to = useNavigate()
  const location = useLocation()
  const { product } = location.state || {} // Adicione uma verificação de fallback aqui


  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category: Yup.object().required('Selecione a categoria do produto'),
    offer: Yup.bool()
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async data => {
    const product_data_form_data = new FormData()

    product_data_form_data.append('name', data.name)
    product_data_form_data.append('price', data.price)
    product_data_form_data.append('category_id', data.category.id)
    product_data_form_data.append('file', data.file[0])
    product_data_form_data.append('offer', data.offer)

    await toast.promise(
      api.put(`products/${product.id}`, product_data_form_data),
      {
        pending: 'editando novo produto...',
        success: 'produto editado com sucesso',
        error: 'Falha ao editar produto'
      })

    setTimeout(() => {
      to('/listar-produtos')
    }, 2000)
  }

  useEffect(() => {
    async function load_categories() {
      const { data } = await api.get('categories')

      set_categories(data)
    }
    load_categories()
  }, [])


  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input placeholder='Nome do produto' type='text' {...register('name')} defaultValue={product.name} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Preço</Label>
          <Input placeholder='Valor do produto' type='number' {...register('price')} defaultValue={product.price} />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>

        <div>
          <LabelUpload>
            {file_name || (
              <>
                <CloudUploadIcon />
                Carregar imagem do produto
              </>)}

            <input
              type='file'
              accept='image/png, image/jpeg'
              {...register('file')}
              onChange={value => { set_file_name(value.target.files[0]?.name) }}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>

        <div className='controller'>
          <Controller
            name='category'
            control={control}
            defaultValue={product.category}
            render={({ field }) => {
              return (<ReactSelect
                {...field}
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
                placeholder='Selecione a categoria'
                defaultValue={product.category}
              />)
            }}>
          </Controller>
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>

        <ContainerInput>
          <input type="checkbox" {...register('offer')} defaultChecked={product.offer} />
          <label>Produto em oferta?</label>
        </ContainerInput>

        <ButtonStyles>Editar produto</ButtonStyles>
      </form>
    </Container>
  )
}
