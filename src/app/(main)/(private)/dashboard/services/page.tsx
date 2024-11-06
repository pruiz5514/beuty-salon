import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { ServicesService } from "@/app/infrastructure/services/services.service";
import ServicesTable from "@/components/organisms/Tables/ServicesTable";
import FeatureTemplate from "@/components/template/private/FeatureTemplate/FeatureTemplate"

const useServicesService = new ServicesService();

export default async function ServicePage() {
  const services = await useServicesService.findAllServices('services?page=1&size=10');
  
  return (
    <main>
      <FeatureTemplate>
        <ServicesTable services={services.content}/>
      </FeatureTemplate>
    </main>
    
  )
}
