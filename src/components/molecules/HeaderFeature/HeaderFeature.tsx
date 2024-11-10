'use client';

import './HeaderFeature.scss'
import Button from '@/components/atoms/Button/Button'
import Modal from '@/components/atoms/Modal/Modal';
import ServicesForm from '@/components/organisms/Forms/ServicesForm';
import { useState } from 'react';
import Select from '@/components/atoms/Select/Select';
import { useRouter, useSearchParams } from 'next/navigation';
import CLientsForm from '@/components/organisms/Forms/ClientsForm';


interface IHeaderFeature {
  feature: string;
}

const HeaderFeature: React.FC<IHeaderFeature> = ({feature}) => {

  const [modal, setModal] = useState(false);

  const handleCloseModal = ()=> setModal(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const order = event.currentTarget.value;
    const params = new URLSearchParams(searchParams.toString());
    params.set('order', order.toString());

    router.push(`?${params.toString()}`)
  }


  const renderForm = () => {
    if(feature === 'services'){
      return {
        buttonFeature : 'servicio',
        form: <ServicesForm action='add' propFunction={handleCloseModal}/>
      }
    } else if (feature === 'clients'){
      return {
        buttonFeature : 'cliente',
        form: <CLientsForm action='add' propFunction={handleCloseModal}/>
      }
    }

    return { buttonFeature: '', form: null }
  }

  const {form, buttonFeature} = renderForm();
  
  return (
    <div className='header_feature-container'>
        <div className='header_feature_select-container'>
          <Select onChange={handleChange}>
              <option value="" disabled selected>Ordenar</option>
              <option value="ASC">Ascendente</option>
              <option value="DESC">Descendente</option>
          </Select>
        </div>
        <div className='header_feature_button-container'>
            <Button onClick={()=> setModal(true)}>Agregar {buttonFeature}</Button>
        </div>

        {modal && 
          <Modal propFunction={handleCloseModal}>
              {form}
          </Modal>
        }
    </div>
  )
}

export default HeaderFeature