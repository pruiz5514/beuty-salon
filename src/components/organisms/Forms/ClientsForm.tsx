"use client";

import { IClientsContent } from '@/app/core/application/dto/dashboard/clients/get-clients-response.dto';
import { ClientsService } from '@/app/infrastructure/services/clients.service';
import { successAlert } from '@/app/infrastructure/utils/alerts';
import Button from '@/components/atoms/Button/Button'
import Form from '@/components/atoms/Form/Form'
import H1 from '@/components/atoms/H1/H1'
import FormFiled from '@/components/molecules/common/FormField/FormFiled'
// import { closeModal } from '@/redux/features/modalSlice';
// import { useAppDispatch } from '@/redux/hooks';
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'


interface IClientsForm{
  action:string;
  clientSelected?: IClientsContent;
  propFunction: ()=>void
}

const useClientsService = new ClientsService(`${process.env.NEXT_PUBLIC_FRONT_HOST}/api`)
 
const clientsSchema = yup.object()
    .shape({
        firstName: yup
            .string()
            .required("El nombre del cliente es obligatorio"),
        lastName: yup
            .string()
            .required("El apellido del cliente es obligatorio"),
        email: yup
            .string().email()
            .required("El email del cliente es obligatorio"),
        phone: yup
            .string()
            .required("El teléfono del cliente es obligatorio")
            .min(10, 'El teléfono debe tener al menos 10 caracteres')
            .max(20, 'El teléfono debe tener máximo 20 caracteres')
    })

const ClientsForm:React.FC<IClientsForm> = ({action, clientSelected, propFunction}) => {

  const {
    control,
    handleSubmit,
    // setError,
    formState: {errors}
  } = useForm<IClientsPost>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(clientsSchema),
    defaultValues: clientSelected
  })

  const router = useRouter();
  // const dispatch = useAppDispatch();

  const handlePost = async (data :IClientsPost)=>{
    await useClientsService.postClient('clients',data);
    successAlert("Se creo cliente exitosamente");
    propFunction();
    router.refresh();
  } 

  const handleEdit = async (data:IClientsPost) =>{
    await useClientsService.editClient('clients',String(clientSelected?.id), data);
    propFunction();
    router.refresh();
  }
  
  const onSubmit = action === 'add' ? handlePost : handleEdit;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <H1>{action === 'add' ? 'Publicar' : 'Editar'} cliente</H1>
        <FormFiled<IClientsPost>
            type='text'
            label='Nombre del Cliente'
            name = 'firstName'
            placeholder='Juan'
            error={errors.firstName}
            control={control}              
        />
       <FormFiled<IClientsPost>
            type='text'
            label='Apellido del Cliente'
            name = 'lastName'
            placeholder='Pérez'
            error={errors.lastName}
            control={control}              
        />
       <FormFiled<IClientsPost>
            type='email'
            label='Email del Cliente'
            name = 'email'
            placeholder='juan@perez.com'
            error={errors.email}
            control={control}              
        />
        <FormFiled<IClientsPost>
            type='text'
            label='Teléfono del Cliente'
            name = 'phone'
            placeholder='12345678'
            error={errors.phone}
            control={control}              
        />
        <Button type='submit'>{action === 'add' ? 'Publicar' : 'Editar'} cliente</Button>
    </Form>
    
  )
}

export default ClientsForm