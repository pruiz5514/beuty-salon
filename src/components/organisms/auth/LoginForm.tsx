"use client";

import { ErrorResponse, FieldError, ILoginRequest } from '@/app/core/application/dto'
import FormFiled from '@/components/molecules/common/FormField/FormFiled'
import { yupResolver } from '@hookform/resolvers/yup'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const logiSchema = yup.object()
    .shape({
        userName: yup
            .string()
            .email('El correo es inválido')
            .required('El correo es obligatorio'),
        password: yup
            .string()
            .min(8, 'La contraseña debe tener al menos 8 caracteres')
            .required('La contreseña es obligatoria')
    })

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: {errors}
  } = useForm<ILoginRequest>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver : yupResolver(logiSchema)
  })

  const router = useRouter();

  const handleLogin = async (data: ILoginRequest)=>{
    try{
      const result = await signIn("credentials", {
        redirect: false,
        username: data.userName,
        password: data.password
      })

      if(result?.error){
        console.log("Ocurrio un error", JSON.parse(result.error));
        handleError(JSON.parse(result.error))
        return
      }
      router.push("/dashboard/services")
    }catch(error){
      console.log(error)
    }
  }

  const handleError = (error: unknown) => {
    const erroData = error as ErrorResponse;
    if (erroData && erroData.errors) {
      if (Array.isArray(erroData.errors) && "field" in erroData.errors[0]) {
        erroData.errors.forEach((fieldError) => {
          const { field, error } = fieldError as FieldError;
          setError(field as keyof ILoginRequest, {
            message: error,
          });
        });
      } else {
        if ("message" in erroData.errors[0]) {
          setError("userName", {
            message: erroData.errors[0].message,
          });
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
        <h2>Iniciar sesión</h2>
        <FormFiled<ILoginRequest>
            control = {control}
            type='email'
            label='Correo Electrónico'
            name='userName'
            error={errors.userName}
            placeholder='Ingresa tu correo'
        />

        <FormFiled<ILoginRequest>
            control = {control}
            type='password'
            label='Contraseña'
            name='password'
            error={errors.password}
            placeholder='Ingresa tu contraseña'
        />

        <button type='submit'>
            Iniciar sesión
        </button>
    </form>
  )
}

export default LoginForm