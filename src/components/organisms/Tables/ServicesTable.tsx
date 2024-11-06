import { IServicesContent } from "@/app/core/application/dto/dashboard/services/get-services-response.dto"
import Table from "@/components/atoms/Table/Table"
import TableContaier from "@/components/atoms/Table/TableContainer"
import Tbody from "@/components/atoms/Table/Tbody"
import Td from "@/components/atoms/Table/Td"
import Th from "@/components/atoms/Table/Th"
import Thead from "@/components/atoms/Table/Thead"
import Tr from "@/components/atoms/Table/Tr"
import TdActions from "@/components/molecules/TdActions/TdActions"

interface IServicesTable{
    services: IServicesContent[]
}

const ServicesTable:React.FC<IServicesTable> = ({services}) => {
    console.log(services);
    
  return (
    <TableContaier>
        <Table>
            <Thead>
                <Tr>
                    <Th>Id</Th>
                    <Th>Nombre</Th>
                    <Th>Descripción</Th>
                    <Th>Precio</Th>
                    <Th>Acciones</Th>
            </Tr>
            </Thead>
            <Tbody>
                {services.map((service:IServicesContent)=>(
                    <Tr key={service.id}>
                        <Td>{service.id}</Td>
                        <Td>{service.name}</Td>
                        <Td>{service.description}</Td>
                        <Td>$ {service.price}</Td>
                        <Td> <TdActions/> </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    </TableContaier>
  )
}

export default ServicesTable