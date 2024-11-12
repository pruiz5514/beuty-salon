import { IClientsPost, IClientsPostResponse } from "../dto"
import { IClientsResponse } from "../dto/dashboard/clients/get-clients-response.dto"

export interface PClients {
    /**
   * Get all clients
   * @returns {Promise<IClientsResponse>} - Get all clients response
   */
    findAllClients(url: string): Promise<IClientsResponse>

     /**
   * Post a clients
   *  @param {string} - Client url
   *  @param {IClientsPost} - Client body
   *  @returns {Promise<IClientsPostResponse>} - Post servive response 
   */
     postClient(url:string, body:IClientsPost): Promise<IClientsPostResponse>

     /**
   * Delete a client
   *  @param {string} - Client url
   *  @param {string} - Client id
   *  @returns {Promise<void>} 
   */
     deleteClient(url:string,id:string): Promise<void>

     /**
   * find a client by id
   *  @param {string} - Client url
   *  @param {string} - Client id
   *  @returns {Promise<IClientsResponse>} - Find client by Id response 
   */
     findClientById(url:string, id:string): Promise<IClientsResponse>

     /**
   * edit a client
   *  @param {string} - Client url
   *  @param {string} - Client id
   *  @param {IClientsPost} - Client body
   *  @returns {Promise<IClientsPostResponse>} - Edit client response 
   */
     editClient(url:string, id:string, body: IClientsPost): Promise<IClientsPostResponse>
}