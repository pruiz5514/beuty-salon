import { EmployeesService } from "@/app/infrastructure/services/employees.service";
import EmployeesTable from "@/components/organisms/Tables/EmployeesTable";
import FeatureTemplate from "@/components/template/private/FeatureTemplate/FeatureTemplate"

const useEmployeesService = new EmployeesService();

interface IProps {
  searchParams:{
    page: string;
    size: string;
    order?: string
  }
}

export default async function EmployeesPage({searchParams}:IProps) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const size = searchParams.size ? parseInt(searchParams.size) : 8;
  const order = searchParams.order || ''

  const employees = await useEmployeesService.findAllEmployees(`employees?page=${page}&size=${size}`,{order});
  
  return (
    <main>
      <FeatureTemplate data={employees} title='Empleados' feature="employees">
        <EmployeesTable employees={employees.content}/>
      </FeatureTemplate>
    </main>
    
  )
}
