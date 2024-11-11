"use client";


import { IEmployeesContent } from '@/app/core/application/dto/dashboard/employees/get-employees-response.dto';
import { IEmployeesPost } from '@/app/core/application/dto/dashboard/employees/post-employees.dto';
import { EmployeesService } from '@/app/infrastructure/services/employees.service';
import { successAlert } from '@/app/infrastructure/utils/alerts';
import Button from '@/components/atoms/Button/Button'
import Form from '@/components/atoms/Form/Form'
import H1 from '@/components/atoms/H1/H1'
import FormFiled from '@/components/molecules/common/FormField/FormFiled';
import FormFiledSelect from '@/components/molecules/common/FormFieldSelect/FormFieldSelect';
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'


interface IEmployeesForm{
  action:string;
  employeeSelected?: IEmployeesContent;
  propFunction: ()=>void
}

const useEmployeesService = new EmployeesService(`${process.env.NEXT_PUBLIC_FRONT_HOST}/api`)
 
const clientsSchema = yup.object()
    .shape({
        firstName: yup
            .string()
            .required("El nombre del empleado es obligatorio"),
        lastName: yup
            .string()
            .required("El apellido del empleado es obligatorio"),
        email: yup
            .string().email()
            .required("El email del empleado es obligatorio"),
        phone: yup
            .string()
            .required("El teléfono del empleado es obligatorio")
            .min(10, 'El teléfono debe tener al menos 10 caracteres')
            .max(20, 'El teléfono debe tener máximo 20 caracteres'),
        role: yup
            .string()
            .required("El rol del empleado es obligatorio"),
    })

const EmployeesForm:React.FC<IEmployeesForm> = ({action, employeeSelected, propFunction}) => {

  const {
    control,
    handleSubmit,
    // setError,
    formState: {errors}
  } = useForm<IEmployeesPost>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(clientsSchema),
    defaultValues: employeeSelected
  })

  const router = useRouter();

  const handlePost = async (data :IEmployeesPost)=>{
    await useEmployeesService.postEmployee('employees',data);
    successAlert("Se creo cliente exitosamente");
    propFunction();
    router.refresh();
  } 

  const handleEdit = async (data:IEmployeesPost) =>{
    await useEmployeesService.editEmployee('employees',String(employeeSelected?.id), data);
    propFunction();
    router.refresh();
  }
  
  const onSubmit = action === 'add' ? handlePost : handleEdit;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <H1>{action === 'add' ? 'Publicar' : 'Editar'} empleado</H1>
        <FormFiled<IEmployeesPost>
            type='text'
            label='Nombre del empleado'
            name = 'firstName'
            placeholder='Juan'
            error={errors.firstName}
            control={control}              
        />
       <FormFiled<IEmployeesPost>
            type='text'
            label='Apellido del empleado'
            name = 'lastName'
            placeholder='Pérez'
            error={errors.lastName}
            control={control}              
        />
       <FormFiled<IEmployeesPost>
            type='email'
            label='Email del empleado'
            name = 'email'
            placeholder='juan@perez.com'
            error={errors.email}
            control={control}              
        />
        <FormFiled<IEmployeesPost>
            type='text'
            label='Teléfono del empleado'
            name = 'phone'
            placeholder='12345678'
            error={errors.phone}
            control={control}              
        />
        <FormFiledSelect<IEmployeesPost>
            label='Rol del empleado'
            name='role'
            error={errors.role}
            control={control}
        >
          <option value="" selected disabled>Rol</option>
          <option value="ADMIN" >Administrador</option>
          <option value="BARBER" >Barbero</option>
        </FormFiledSelect>
        <Button type='submit'>{action === 'add' ? 'Publicar' : 'Editar'} empleado</Button>
    </Form>
    
  )
}

export default EmployeesForm