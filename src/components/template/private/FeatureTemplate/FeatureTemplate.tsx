import H1 from '@/components/atoms/H1/H1'
import './FeatureTemplate.scss'
import HeaderFeature from '@/components/molecules/HeaderFeature/HeaderFeature'
import Pagination from '@/components/molecules/Pagination/Pagination';
import { IServicesResponse } from '@/app/core/application/dto/dashboard/services/get-services-response.dto';
import Modal from '@/components/atoms/Modal/Modal';

interface IFeatureTemplateProps{
  children: React.ReactNode;
  data: IServicesResponse;
}

const FeatureTemplate: React.FC<IFeatureTemplateProps> = ({children, data}) => {
  return (
    <section className='feature_template-section'>
        <H1>Servicios</H1>
        <HeaderFeature/>
        {children}
        <Pagination data ={data}/>

    </section>
  )
}

export default FeatureTemplate