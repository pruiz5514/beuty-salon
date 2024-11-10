import { ClientsService } from "@/app/infrastructure/services/clients.service";
import CientsTable from "@/components/organisms/Tables/ClientsTable";
import FeatureTemplate from "@/components/template/private/FeatureTemplate/FeatureTemplate"

const useClientsService = new ClientsService();

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

  const clients = await useClientsService.findAllClients(`clients?page=${page}&size=${size}`,{order});
  
  return (
    <main>
      <FeatureTemplate data={clients} title='Clientes' feature="clients">
        <CientsTable clients={clients.content}/>
      </FeatureTemplate>
    </main>
    
  )
}
