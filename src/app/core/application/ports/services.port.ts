import { IServicesPost, IServicesPostResponse, IServicesResponse } from "../dto";


export interface PServices {
    /**
   * Get all services
   * @returns {Promise<IServicesResponse>} - Get all services response
   */
    findAllServices(url: String): Promise<IServicesResponse>

     /**
   * Post a service
   *  @param {string} - Service url
   *  @param {IServicesPost} - Service body
   *  @returns {Promise<IServicesResponse>} - Post servive response 
   */
     postSevice(url:string, body:IServicesPost): Promise<IServicesPostResponse>

     /**
   * Delete a service
   *  @param {string} - Service url
   *  @param {string} - Service id
   *  @returns {Promise<void>} 
   */
     deleteService(url:string,id:string): Promise<void>

     /**
   * find a service by id
   *  @param {string} - Service url
   *  @param {string} - Service id
   *  @returns {Promise<IServicesResponse>} - Find service by Id response 
   */
     findServiceById(url:string, id:string): Promise<IServicesResponse>

     /**
   * edit a service
   *  @param {string} - Service url
   *  @param {string} - Service id
   *  @param {IServicesPost} - Service body
   *  @returns {Promise<IServicesPostResponse>} - Edit service response 
   */
     editService(url:string, id:string, body: IServicesPost): Promise<IServicesPostResponse>
}