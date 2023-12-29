import {NextResponse} from "next/server";

import prisma from "@/app/libs/prismadb";

export async function POST(
    request: Request,
) {
    const body = await request.json();

    const listingAndReservation = await prisma.reservation.create({data : body});

    return NextResponse.json(listingAndReservation);
}