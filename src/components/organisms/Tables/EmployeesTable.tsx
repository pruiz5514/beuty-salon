import { IEmployeesContent } from "@/app/core/application/dto/dashboard/employees/get-employees-response.dto"
import Table from "@/components/atoms/Table/Table"
import TableContaier from "@/components/atoms/Table/TableContainer"
import Tbody from "@/components/atoms/Table/Tbody"
import Td from "@/components/atoms/Table/Td"
import Th from "@/components/atoms/Table/Th"
import Thead from "@/components/atoms/Table/Thead"
import Tr from "@/components/atoms/Table/Tr"
import TdActions from "@/components/molecules/TdActions/TdActions"

interface IEmployeesTable{
    employees: IEmployeesContent[]
}

const EmployeesTable:React.FC<IEmployeesTable> = ({employees}) => { 
    
    
  return (
    <TableContaier>
        <Table>
            <Thead>
                <Tr>
                    <Th>Id</Th>
                    <Th>Nombre</Th>
                    <Th>Apellido</Th>
                    <Th>teléfono</Th>
                    <Th>Email</Th>
                    <Th>Rol</Th>
                    <Th>Acciones</Th>
            </Tr>
            </Thead>
            <Tbody>
                {employees.map((employee:IEmployeesContent)=>(
                    <Tr key={employee.id}>
                        <Td>{employee.id}</Td>
                        <Td>{employee.firstName}</Td>
                        <Td>{employee.lastName}</Td>
                        <Td>{employee.phone}</Td>
                        <Td>{employee.email}</Td>
                        <Td>{employee.role ==='ADMIN' ? 'Administrador' : 'Barbero' }</Td>
                        <Td> <TdActions feature='employees' data={employee}/> </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    </TableContaier>
  )
}

export default EmployeesTable