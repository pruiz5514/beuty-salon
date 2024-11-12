import { ILoginRequest, ILoginResponse } from "../dto";

export interface PAuth {
    /**

   * @param {ILoginRequest} - Login Request
   * @returns {Promise<ILoginResponse>} - Login response
   * @throws {Error} - Throws an error if the API call fails, handled by `handleApiErrors`.
   */
    login(req: ILoginRequest): Promise<ILoginResponse>
}