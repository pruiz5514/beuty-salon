import './Modal.scss'
import { IoClose } from 'react-icons/io5';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { closeModal } from '@/redux/features/modalSlice';

interface ModalProps{
    children: React.ReactNode;
}

const Modal:React.FC<ModalProps> = ({children}) => {
    const dispatch = useAppDispatch();

  return (
    <div className='modal-background'>
        <div className='modal-container'>
          <button className='button-modal' onClick={()=>dispatch(closeModal())}><IoClose /></button>
            {children}
        </div>
    </div>
  )
}

export default Modal