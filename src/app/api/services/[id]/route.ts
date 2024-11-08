import { NextResponse } from "next/server";
import { HttpClient } from "@/app/infrastructure/utils";

const url = 'https://beautysalongates-production.up.railway.app/api/v1/services'

const useHttpClient = new HttpClient();

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    const headers = await useHttpClient.getHeader();

    const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: headers
    });

}