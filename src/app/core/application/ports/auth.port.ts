import { ILoginRequest, ILoginResponse } from "../dto";

export interface PAuth {
    /**
   * Fetches all certificates with pagination and optional search filters.
   * This method leverages a dynamic query parameter generator to facilitate complex search capabilities.
   *
   * @param {ILoginRequest} pagination - Pagination parameters including the page number and the number of items per page.
   * @param {ILoginRequest} searchColumns - Optional search filters based on certificate properties.
   * @returns {Promise<ILoginResponse>} - A promise that resolves with the response containing the list of certificates and pagination details.
   * @throws {Error} - Throws an error if the API call fails, handled by `handleApiErrors`.
   */
    login(req: ILoginRequest): Promise<ILoginResponse>
}