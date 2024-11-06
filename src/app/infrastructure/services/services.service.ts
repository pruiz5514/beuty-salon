import { IServicesResponse } from "@/app/core/application/dto/dashboard/services/get-services-response.dto";
import { HttpClient } from "../utils";

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
            throw error;
        }
    }
}