import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const defaultBaseUrl = "https://beautysalongates-production.up.railway.app/api/v1";
const backUrl = 'http://localhost:3000/api'

export class HttpClient {
  private baseUrl: string;
  private backUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || defaultBaseUrl;
    this.backUrl = backUrl
  }

  async get<T>(url: string): Promise<T> {
    const headers = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}`, {
      headers: headers,
      method: "GET",
      cache: "no-store"
    });

    return this.handleResponse(response);
  }

  async delete<T>(url: string) {
    const response = await fetch(`${this.backUrl}/${url}`, {
      method: "DELETE",
    });

  }

  async post<T, B>(url:string, body: B): Promise<T> {
    const response = await fetch(`${this.backUrl}/${url}`, {
      method: "POST",
      body: JSON.stringify(body),
    });

    return this.handleResponse(response);
  }

  async put <T, B> (url:string, body:B): Promise<T>{
    const response = await fetch(`${this.backUrl}/${url}`,{
        method:"PUT",
        body: JSON.stringify(body)
    });

    return this.handleResponse(response)
  }

  async getHeader() {
    const session = await getServerSession(authOptions);

    const headers:HeadersInit =  {
      "Content-Type" : "application/json"
    };

    if(session && session.user?.token){
      headers['Authorization'] = `Bearer ${session.user?.token}`
    }

    return headers
    
  }

  private async handleResponse(response: Response) {
    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }

    return await response.json();
  }
}