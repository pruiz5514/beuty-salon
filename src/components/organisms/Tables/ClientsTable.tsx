
import { IClientsContent } from "@/app/core/application/dto/dashboard/clients/get-clients-response.dto"
import Table from "@/components/atoms/Table/Table"
import TableContaier from "@/components/atoms/Table/TableContainer"
import Tbody from "@/components/atoms/Table/Tbody"
import Td from "@/components/atoms/Table/Td"
import Th from "@/components/atoms/Table/Th"
import Thead from "@/components/atoms/Table/Thead"
import Tr from "@/components/atoms/Table/Tr"
import TdActions from "@/components/molecules/TdActions/TdActions"

interface IClientsTable{
    clients: IClientsContent[]
}

const CientsTable:React.FC<IClientsTable> = ({clients}) => { 
    
    
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
                    <Th>Citas</Th>
                    <Th>Acciones</Th>
            </Tr>
            </Thead>
            <Tbody>
                {clients.map((client:IClientsContent)=>(
                    <Tr key={client.id}>
                        <Td>{client.id}</Td>
                        <Td>{client.firstName}</Td>
                        <Td>{client.lastName}</Td>
                        <Td>{client.phone}</Td>
                        <Td>{client.email}</Td>
                        <Td>{client.appointments}</Td>
                        <Td> <TdActions feature='clients' data={client}/> </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    </TableContaier>
  )
}

export default CientsTable