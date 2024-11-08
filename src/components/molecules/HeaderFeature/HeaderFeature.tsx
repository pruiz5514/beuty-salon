'use client';

// import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import './HeaderFeature.scss'
import Button from '@/components/atoms/Button/Button'
import { openModal } from '@/redux/features/modalSlice';
import Modal from '@/components/atoms/Modal/Modal';
import ServicesForm from '@/components/organisms/Forms/ServicesForm';
import { useState } from 'react';

const HeaderFeature = () => {
  // const modalState = useAppSelector(state => state.modalReducer.isOpen);
  // const dispatch = useAppDispatch();

  const [modal, setModal] = useState(false);

  const handleCloseModal = ()=> setModal(false);
  
  return (
    <div className='header_feature-container'>
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