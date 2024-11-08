import { NextResponse } from "next/server";
import { HttpClient } from "@/app/infrastructure/utils";

const url = 'https://beautysalongates-production.up.railway.app/api/v1/services'

const useHttpClient = new HttpClient();

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    const headers = await useHttpClient.getHeader();
    const response = await fetch(`${url}/${id}`, {
        method: 'GET',
        headers: headers
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    const headers = await useHttpClient.getHeader();

    const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: headers
    });
}

export async function PUT(request: Request, {params} : {params:{id:string}}){
    const {id} = params;
    const headers = await useHttpClient.getHeader();
    const body = await request.json();

    const response = await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(body)
    })

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}
