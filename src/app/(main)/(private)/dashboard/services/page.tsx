import { ServicesService } from "@/app/infrastructure/services/services.service";
import ServicesTable from "@/components/organisms/Tables/ServicesTable";
import FeatureTemplate from "@/components/template/private/FeatureTemplate/FeatureTemplate"

const useServicesService = new ServicesService();

interface IProps {
  searchParams:{
    page: string;
    size: string;
    order?: string
  }
}

export default async function ServicePage({searchParams}:IProps) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const size = searchParams.size ? parseInt(searchParams.size) : 8;
  const order = searchParams.order || ''

  const services = await useServicesService.findAllServices(`services?page=${page}&size=${size}`,{order});
  
  return (
    <main>
      <FeatureTemplate data={services} title="Servicios" feature="services">
        <ServicesTable services={services.content}/>
      </FeatureTemplate>
    </main>
    
  )
}
