import H1 from '@/components/atoms/H1/H1'
import './FeatureTemplate.scss'
import HeaderFeature from '@/components/molecules/HeaderFeature/HeaderFeature'
import Pagination from '@/components/molecules/Pagination/Pagination';
import { IServicesResponse } from '@/app/core/application/dto/dashboard/services/get-services-response.dto';
import { IClientsResponse } from '@/app/core/application/dto/dashboard/clients/get-clients-response.dto';

interface IFeatureTemplateProps{
  children: React.ReactNode;
  data: IServicesResponse | IClientsResponse;
  title: string;
  feature: string;
}

const FeatureTemplate: React.FC<IFeatureTemplateProps> = ({children, data, title, feature}) => {
  return (
    <section className='feature_template-section'>
        <H1>{title}</H1>
        <HeaderFeature feature={feature}/>
        {children}
        <Pagination data ={data}/>

    </section>
  )
}

export default FeatureTemplate