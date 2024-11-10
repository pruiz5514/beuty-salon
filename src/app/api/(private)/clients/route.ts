import { NextResponse } from "next/server";
import { HttpClient } from "@/app/infrastructure/utils";


const url = 'https://beautysalongates-production.up.railway.app/api/v1/clients'

const useHttpClient = new HttpClient();

export async function POST (request: Request){
    const client = await request.json()
    const headers = await useHttpClient.getHeader();
    const response = await fetch(url,{
        method : 'POST',
        headers: headers,
        body: JSON.stringify(client)
    });
    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}