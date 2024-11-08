import { IServicesResponse } from "@/app/core/application/dto/dashboard/services/get-services-response.dto";
import { HttpClient } from "../utils";
import { IServicesPost } from "@/app/core/application/dto/dashboard/services/post-services.dto";
import { IServicesPostResponse } from "@/app/core/application/dto/dashboard/services/post-services-response.dto";
import { errorAlert, successAlert } from "../utils/alerts";

export class ServicesService{
    private httpClient: HttpClient;

    constructor(){
        this.httpClient = new HttpClient();
    }

    async findAllServices(url:string){
        try{
            const response = this.httpClient.get<IServicesResponse>(url);
            return response
        }catch(error){
            console.log(error);
            errorAlert("No se pudo crear el servicio, intente luego")
            throw error;
        }
    }

    async postSevice(url:string, body:IServicesPost){
        try{
            const newService = await this.httpClient.post<IServicesPostResponse, IServicesPost>(url,body);
            return newService;
        }catch(error){
            console.log(error);
            throw error
        }
    }

    async deleteService(url:string,id:string){
        try{
            const serviceToDelete = await this.httpClient.delete(`${url}/${id}`);
            successAlert('Elminado exitosamente');
            return serviceToDelete;
        } catch(error){
            console.log(error);
            errorAlert('No se pudo eleminar')
            throw error;
        }
    }
}