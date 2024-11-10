'use client';

import ButtonIcon from '@/components/atoms/ButtonIcon/ButtonIcon'
import './Pagination.scss'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
import { useRouter, useSearchParams } from 'next/navigation';
import { IServicesResponse } from '@/app/core/application/dto/dashboard/services/get-services-response.dto';
import { IClientsResponse } from '@/app/core/application/dto/dashboard/clients/get-clients-response.dto';

interface IPaginationProps{
    data: IServicesResponse | IClientsResponse
  }

const Pagination:React.FC<IPaginationProps> = ({data}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onPageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());

    router.push(`?${params.toString()}`);
  } 

  const currentPage = data.pageable.pageNumber + 1;

  return (
    <div className='pagination-container'>
        <ButtonIcon onClick={()=> onPageChange(currentPage-1)} className={currentPage===1 ? 'hidden' : 'pagination-button'} > <IoChevronBack /></ButtonIcon>
        Página {currentPage} de {data.totalPages}
        <ButtonIcon onClick={()=> onPageChange(currentPage+1)} className={data.totalPages === currentPage ? 'hidden' : 'pagination-button'}> <IoChevronForward /></ButtonIcon>
    </div>
  )
}

export default Pagination