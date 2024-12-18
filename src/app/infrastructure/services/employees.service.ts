import { HttpClient } from "../utils";
import { errorAlert, successAlert } from "../utils/alerts";
import { IEmployeesResponse } from "@/app/core/application/dto/dashboard/employees/get-employees-response.dto";
import { IEmployeesPostResponse } from "@/app/core/application/dto/dashboard/employees/post-employees-response.dto";
import { IEmployeesPost } from "@/app/core/application/dto/dashboard/employees/post-employees.dto";
import { PEmployees } from "@/app/core/application/ports/employees.port";

export class EmployeesService implements PEmployees{
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
            const employeeById = await this.httpClient.get<IEmployeesResponse>(`${url}/${id}`);
            return employeeById
        } catch (error){
            console.log(error);
            throw error
        }
    }

    async editEmployee (url:string, id:string, body:IEmployeesPost){
        try{
            const employeeEdited =  await this.httpClient.put<IEmployeesPostResponse,IEmployeesPost>(`${url}/${id}`, body);
            successAlert('Editado exitosamente');
            return employeeEdited;
            
        } catch(error){
            console.log(error);
            throw error;
            
        }
    }
}