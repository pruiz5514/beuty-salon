import { NextResponse } from "next/server";
import { HttpClient } from "@/app/infrastructure/utils";


const url = `${process.env.NEXT_PUBLIC_BACK_HOST}/clients`

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