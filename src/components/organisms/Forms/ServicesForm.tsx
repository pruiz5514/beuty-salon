"use client";

import { IServicesContent } from '@/app/core/application/dto/dashboard/services/get-services-response.dto';
import { IServicesPost } from '@/app/core/application/dto/dashboard/services/post-services.dto'
import { ServicesService } from '@/app/infrastructure/services/services.service'
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


interface IServicesForm{
  action:string;
  serviceSelected?: IServicesContent;
  propFunction: ()=>void
}

const useServicesService = new ServicesService()
 
const servicesSchema = yup.object()
    .shape({
        name: yup
            .string()
            .required("El nombre del corte es obligatorio"),
        description: yup
            .string()
            .required("La descripción del corte es obligatoria"),
        price: yup
            .number()
            .required("El precio del corte es obligatorio")
    })

const ServicesForm:React.FC<IServicesForm> = ({action, serviceSelected, propFunction}) => {

  const {
    control,
    handleSubmit,
    // setError,
    formState: {errors}
  } = useForm<IServicesPost>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(servicesSchema),
    defaultValues: serviceSelected
  })

  const router = useRouter();
  // const dispatch = useAppDispatch();

  const handlePost = async (data :IServicesPost)=>{
    await useServicesService.postSevice('services',data);
    successAlert("Se creo servicio exitosamente");
    propFunction();
    router.refresh();
  } 

  const handleEdit = async (data:IServicesPost) =>{
    await useServicesService.editService('services',String(serviceSelected?.id), data);
    propFunction();
    router.refresh();
  }
  
  const onSubmit = action === 'add' ? handlePost : handleEdit;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <H1>{action === 'add' ? 'Publicar' : 'Editar'} servicio</H1>
        <FormFiled<IServicesPost>
            type='text'
            label='Nombre del servicio'
            name = 'name'
            placeholder='Clasico'
            error={errors.name}
            control={control}              
        />
        <FormFiled<IServicesPost>
            type='text'
            label='Descripción del servicio'
            name = 'description'
            placeholder='Un estilo con laterales definidos y parte superior con un toque de longitud'
            error={errors.description}
            control={control}
        />
        <FormFiled<IServicesPost>
            type='number'
            label='Precio del servicio'
            name = 'price'
            placeholder='15000'
            error={errors.price}
            control={control}
        />
        <Button type='submit'>Publicar servicio</Button>
    </Form>
    
  )
}

export default ServicesForm