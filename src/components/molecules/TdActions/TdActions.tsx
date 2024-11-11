'use client';

import ButtonIcon from '@/components/atoms/ButtonIcon/ButtonIcon';
import './TdActions.scss';
import { GoPencil } from 'react-icons/go'
import { RiDeleteBinLine } from 'react-icons/ri'
import { ServicesService } from '@/app/infrastructure/services/services.service';
import { useRouter } from 'next/navigation';
import Modal from '@/components/atoms/Modal/Modal';
import ServicesForm from '@/components/organisms/Forms/ServicesForm';
import { useState } from 'react';
import { IServicesContent } from '@/app/core/application/dto/dashboard/services/get-services-response.dto';
import { IClientsContent } from '@/app/core/application/dto/dashboard/clients/get-clients-response.dto';
import ClientsForm from '@/components/organisms/Forms/ClientsForm';
import { ClientsService } from '@/app/infrastructure/services/clients.service';
import { IEmployeesContent } from '@/app/core/application/dto/dashboard/employees/get-employees-response.dto';
import EmployeesForm from '@/components/organisms/Forms/EmployeesForm';
import { EmployeesService } from '@/app/infrastructure/services/employees.service';

interface ITdActions{
  data: IServicesContent | IClientsContent | IEmployeesContent;
  feature : string
}

const useServicesService = new ServicesService(`${process.env.NEXT_PUBLIC_FRONT_HOST}/api`);
const useClientsService = new ClientsService(`${process.env.NEXT_PUBLIC_FRONT_HOST}/api`);
const useEmployeesService = new EmployeesService(`${process.env.NEXT_PUBLIC_FRONT_HOST}/api`);

const TdActions: React.FC<ITdActions> = ({data, feature}) => {
  const router = useRouter();

  const [modal, setModal] = useState(false);
  const [featureSelected, setFeatureSelected] = useState<IServicesContent | IClientsContent | IEmployeesContent>();

  const handleCloseModal = ()=> setModal(false);

  const handleDelete = async(id:string) => {
    if(feature === 'services') {
      await useServicesService.deleteService('services',id);
    }else if(feature === 'clients'){
      await useClientsService.deleteClient('clients',id);
    }else if(feature === 'employees'){
      await useEmployeesService.deleteEmployee('employees',id);
    }
    
    router.refresh();
  }


 const handleEdit = () => {
  setModal(true)
  setFeatureSelected(data)
 }

 const renderForm = () => {
    if(feature === 'services'){
      return <ServicesForm propFunction={handleCloseModal} action='edit' serviceSelected={featureSelected as IServicesContent} />
    }else if (feature === 'clients'){
      return  <ClientsForm action='edit' propFunction={handleCloseModal} clientSelected={featureSelected as IClientsContent}/>
    }else if (feature === 'employees'){
      return  <EmployeesForm action='edit' propFunction={handleCloseModal} employeeSelected={featureSelected as IEmployeesContent}/>
    }
  }

  return (
    <div className='td_action-container'>
        <ButtonIcon onClick={handleEdit} className='edit-button'><GoPencil /></ButtonIcon>
        <ButtonIcon onClick={()=>handleDelete(String(data.id))} className='delete-button'> <RiDeleteBinLine /> </ButtonIcon>

        {modal && 
          <Modal propFunction={handleCloseModal}> 
              {renderForm()}
          </Modal>
            }
    </div>
  )
}

export default TdActions