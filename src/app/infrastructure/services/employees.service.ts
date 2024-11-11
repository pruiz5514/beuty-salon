import { IClientsResponse } from "@/app/core/application/dto/dashboard/clients/get-clients-response.dto";
import { HttpClient } from "../utils";
import { errorAlert, successAlert } from "../utils/alerts";
import { IClientsPostResponse } from "@/app/core/application/dto/dashboard/clients/post-clients-response.dto";
import { IClientsPost } from "@/app/core/application/dto/dashboard/clients/post-clients";
import { IEmployeesResponse } from "@/app/core/application/dto/dashboard/employees/get-employees-response.dto";
import { IEmployeesPostResponse } from "@/app/core/application/dto/dashboard/employees/post-employees-response.dto";
import { IEmployeesPost } from "@/app/core/application/dto/dashboard/employees/post-employees.dto";

export class EmployeesService{
    private httpClient: HttpClient;

    constructor(baseUrl?: string){
        this.httpClient = new HttpClient(baseUrl);
    }

    async findAllEmployees(url:string, searchParams?: { order: string }){
        try{
            const response = this.httpClient.get<IEmployeesResponse>(url,searchParams);
            return response
        }catch(error){
            console.log(error);
            throw error;
        }
    }

    async postEmployee(url:string, body:IEmployeesPost){
        try{
            const newEmployee = await this.httpClient.post<IEmployeesPostResponse, IEmployeesPost>(url,body);
            return newEmployee;
        }catch(error){
            console.log(error);
            errorAlert("No se pudo crear el servicio, intente luego")
            throw error
        }
    }

    async deleteEmployee(url:string,id:string){
        try{
            const employeeToDelete = await this.httpClient.delete(`${url}/${id}`);
            successAlert('Eliminado exitosamente');
            return employeeToDelete;
        } catch(error){
            console.log(error);
            errorAlert('No se pudo eleminar')
            throw error;
        }
    }

    async findEmployeeById (url:string, id:string){
        try{
            const employeeById = await this.httpClient.get<IClientsResponse>(`${url}/${id}`);
            return employeeById
        } catch (error){
            console.log(error);
            throw error
        }
    }

    async editEmployee (url:string, id:string, body:IClientsPost){
        try{
            const employeeEdited =  await this.httpClient.put<IClientsPostResponse,IClientsPost>(`${url}/${id}`, body);
            successAlert('Editado exitosamente');
            return employeeEdited;
            
        } catch(error){
            console.log(error);
            throw error;
            
        }
    }
}