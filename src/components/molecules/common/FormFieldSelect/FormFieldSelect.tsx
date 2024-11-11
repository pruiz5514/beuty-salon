'use client';

import '../FormField/FormField.scss'
import Select from '@/components/atoms/Select/Select';
import { Control, Controller, FieldError, FieldValues, Path } from "react-hook-form";

interface IPropsFormFieldSelect<T extends FieldValues> {
    label: string;
    name: Path<T>;
    control: Control<T>;
    error?: FieldError;
    id?: string;
    placeholder?: string;
    children: React.ReactNode;
  }

const FormFiledSelect = <T extends FieldValues>({
  label,
  name,
  control,
  error,
  id,
  children
}: IPropsFormFieldSelect<T>) => {
  return (
    <div className='form_field-container'>
        <label htmlFor={id || label.toLowerCase()}> {label}</label>

        <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            id={id || label.toLowerCase()}
            error={error?.message}
            {...field}
          >
            {children}
          </Select>
        )}
      />
    </div>
    
  )
}

export default FormFiledSelect