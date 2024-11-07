'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import './HeaderFeature.scss'
import Button from '@/components/atoms/Button/Button'
import { openModal } from '@/redux/features/modalSlice';
import Modal from '@/components/atoms/Modal/Modal';
import ServicesForm from '@/components/organisms/Forms/ServicesForm';

const HeaderFeature = () => {
  const modalState = useAppSelector(state => state.modalReducer.isOpen);
  const dispatch = useAppDispatch();

  console.log(modalState);
  return (
    <div className='header_feature-container'>
        <div className='header_feature_button-container'>
            <Button onClick={()=>dispatch(openModal())}>Agregar servicio</Button>
        </div>

        {modalState && 
          <Modal>
              <ServicesForm/>
          </Modal>
        }
    </div>
  )
}

export default HeaderFeature