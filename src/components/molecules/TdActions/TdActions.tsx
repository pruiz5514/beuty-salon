'use client';

import ButtonIcon from '@/components/atoms/ButtonIcon/ButtonIcon';
import './TdActions.scss';
import { GoPencil } from 'react-icons/go'
import { RiDeleteBinLine } from 'react-icons/ri'
import { ServicesService } from '@/app/infrastructure/services/services.service';
import { useRouter } from 'next/navigation';

interface ITdActions{
  dataId : number 
}

const useServicesService = new ServicesService();

const TdActions: React.FC<ITdActions> = ({dataId}) => {
  const router = useRouter();

  const handleDelete = async(id:string) => {
    await useServicesService.deleteService('services',id);
    router.refresh();
  }
  return (
    <div className='td_action-container'>
        <ButtonIcon className='edit-button'><GoPencil /></ButtonIcon>
        <ButtonIcon onClick={()=>handleDelete(String(dataId))} className='delete-button'> <RiDeleteBinLine /> </ButtonIcon>
    </div>
  )
}

export default TdActions