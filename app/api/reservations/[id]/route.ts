import {NextResponse} from "next/server";

import prisma from "@/app/libs/prismadb";

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
 if (request.method !=='PUT') {
    return
  }
    const body = await request.json();
    delete body.id

    const listingAndReservation = await prisma.reservation.update({data : body,where : {
            id : params.id
        }});

    return NextResponse.json(listingAndReservation);
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    if (request.method !=='DELETE') {
        return
    }

    const listingAndReservation = await prisma.reservation.delete({where : {
            id : params.id
        }});

    return NextResponse.json(listingAndReservation);
}