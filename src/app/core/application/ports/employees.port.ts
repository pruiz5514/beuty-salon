import { IEmployeesPost, IEmployeesPostResponse } from "../dto"
import { IEmployeesResponse } from "../dto/dashboard/employees/get-employees-response.dto"

export interface PEmployees {
    /**
   * Get all employees
   * @returns {Promise<IEmployeesResponse>} - Get all employees response
   */
    findAllEmployees(url: String): Promise<IEmployeesResponse>

     /**
   * Post an employee
   *  @param {string} - Employee url
   *  @param {IEmployeesPost} - Employee body
   *  @returns {Promise<IServicesResponse>} - Post servive response 
   */
     postEmployee(url:string, body:IEmployeesPost): Promise<IEmployeesPostResponse>

     /**
   * Delete an employee
   *  @param {string} - Employee url
   *  @param {string} - Employee id
   *  @returns {Promise<void>} 
   */
     deleteEmployee(url:string,id:string): Promise<void>

     /**
   * find an employee by id
   *  @param {string} - Employee url
   *  @param {string} - Employee id
   *  @returns {Promise<IEmployeesResponse>} - Find service by Id response 
   */
     findEmployeeById(url:string, id:string): Promise<IEmployeesResponse>

     /**
   * edit an employee
   *  @param {string} - Employee url
   *  @param {string} - Employee id
   *  @param {IEmployeesPost} - Employee body
   *  @returns {Promise<IServicesPostResponse>} - Edit Employee response 
   */
     editEmployee(url:string, id:string, body: IEmployeesPost): Promise<IEmployeesPostResponse>
}