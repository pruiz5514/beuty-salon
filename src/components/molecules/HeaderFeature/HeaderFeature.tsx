'use client';

// import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import './HeaderFeature.scss'
import Button from '@/components/atoms/Button/Button'
import { openModal } from '@/redux/features/modalSlice';
import Modal from '@/components/atoms/Modal/Modal';
import ServicesForm from '@/components/organisms/Forms/ServicesForm';
import { useState } from 'react';
import Select from '@/components/atoms/Select/Select';
import { useRouter, useSearchParams } from 'next/navigation';

const HeaderFeature = () => {
  // const modalState = useAppSelector(state => state.modalReducer.isOpen);
  // const dispatch = useAppDispatch();

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
            <Button onClick={()=> setModal(true)}>Agregar servicio</Button>
        </div>

        {modal && 
          <Modal propFunction={handleCloseModal}>
              <ServicesForm action='add' propFunction={handleCloseModal}/>
          </Modal>
        }
    </div>
  )
}

export default HeaderFeature