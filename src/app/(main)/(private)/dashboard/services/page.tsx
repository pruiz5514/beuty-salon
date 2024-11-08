import { ServicesService } from "@/app/infrastructure/services/services.service";
import ServicesTable from "@/components/organisms/Tables/ServicesTable";
import FeatureTemplate from "@/components/template/private/FeatureTemplate/FeatureTemplate"

const useServicesService = new ServicesService();

interface IProps {
  searchParams:{
    page: string;
    size: string
  }
}

export default async function ServicePage({searchParams}:IProps) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const size = searchParams.size ? parseInt(searchParams.size) : 8;

  const services = await useServicesService.findAllServices(`services?page=${page}&size=${size}`);
  
  return (
    <main>
      <FeatureTemplate data={services}>
        <ServicesTable services={services.content}/>
      </FeatureTemplate>
    </main>
    
  )
}
