import { IClientsResponse } from "@/app/core/application/dto/dashboard/clients/get-clients-response.dto";
import { HttpClient } from "../utils";
import { errorAlert, successAlert } from "../utils/alerts";
import { IClientsPostResponse } from "@/app/core/application/dto/dashboard/clients/post-clients-response.dto";

export class ClientsService{
    private httpClient: HttpClient;

    constructor(baseUrl?: string){
        this.httpClient = new HttpClient(baseUrl);
    }

    async findAllClients(url:string, searchParams?: { order: string }){
        try{
            const response = this.httpClient.get<IClientsResponse>(url,searchParams);
            return response
        }catch(error){
            console.log(error);
            throw error;
        }
    }

    async postClient(url:string, body:IClientsPost){
        try{
            const newService = await this.httpClient.post<IClientsPostResponse, IClientsPost>(url,body);
            return newService;
        }catch(error){
            console.log(error);
            errorAlert("No se pudo crear el servicio, intente luego")
            throw error
        }
    }

    async deleteClient(url:string,id:string){
        try{
            const serviceToDelete = await this.httpClient.delete(`${url}/${id}`);
            successAlert('Eliminado exitosamente');
            return serviceToDelete;
        } catch(error){
            console.log(error);
            errorAlert('No se pudo eleminar')
            throw error;
        }
    }

    async findClientById (url:string, id:string){
        try{
            const serviceById = await this.httpClient.get<IClientsResponse>(`${url}/${id}`);
            return serviceById
        } catch (error){
            console.log(error);
            throw error
        }
    }

    async editClient (url:string, id:string, body:IClientsPost){
        try{
            const clientEdited =  await this.httpClient.put<IClientsPostResponse,IClientsPost>(`${url}/${id}`, body);
            successAlert('Editado exitosamente');
            return clientEdited;
            
        } catch(error){
            console.log(error);
            throw error;
            
        }
    }
}