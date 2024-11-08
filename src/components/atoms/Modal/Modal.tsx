import './Modal.scss'
import { IoClose } from 'react-icons/io5';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { closeModal } from '@/redux/features/modalSlice';


interface ModalProps{
    children: React.ReactNode;
    propFunction? : ()=> void
}

const Modal:React.FC<ModalProps> = ({children, propFunction}) => {
  const dispatch = useAppDispatch();

  return (
    <div className='modal-background'>
        <div className='modal-container'>
          <button className='button-modal' onClick={propFunction}><IoClose /></button>
            {children}
        </div>
    </div>
  )
}

export default Modal