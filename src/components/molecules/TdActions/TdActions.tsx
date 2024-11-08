'use client';

import ButtonIcon from '@/components/atoms/ButtonIcon/ButtonIcon';
import './TdActions.scss';
import { GoPencil } from 'react-icons/go'
import { RiDeleteBinLine } from 'react-icons/ri'
import { ServicesService } from '@/app/infrastructure/services/services.service';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Modal from '@/components/atoms/Modal/Modal';
import ServicesForm from '@/components/organisms/Forms/ServicesForm';
import { useState } from 'react';
import { IServicesContent } from '@/app/core/application/dto/dashboard/services/get-services-response.dto';
import { IServicesPost } from '@/app/core/application/dto/dashboard/services/post-services.dto';

interface ITdActions{
  data: IServicesContent 
}

const useServicesService = new ServicesService();

const TdActions: React.FC<ITdActions> = ({data}) => {
  const router = useRouter();

  const [modal, setModal] = useState(false);
  const [serviceSelected, setServiceSelected] = useState<IServicesContent>();

  const handleCloseModal = ()=> setModal(false);

  const handleDelete = async(id:string) => {
    await useServicesService.deleteService('services',id);
    router.refresh();
  }


 const handleEdit = () => {
  setModal(true)
  setServiceSelected(data)
 }


  return (
    <div className='td_action-container'>
        <ButtonIcon onClick={handleEdit} className='edit-button'><GoPencil /></ButtonIcon>
        <ButtonIcon onClick={()=>handleDelete(String(data.id))} className='delete-button'> <RiDeleteBinLine /> </ButtonIcon>

        {modal && 

          <Modal propFunction={handleCloseModal}> 
              <ServicesForm propFunction={handleCloseModal} action='edit' serviceSelected={serviceSelected} />
          </Modal>
            }
    </div>
  )
}

export default TdActions