import client from "@/app/libs/prismadb";

export default async function getReservations(id ? : string) {
    try {
        const query: any = {};
        if (id) {
            query.id = id;
        }


        const reservations = await client.reservation.findMany({
            where: query,
            orderBy: {
                createdAt: 'desc'
            }
        });

        return reservations.map(
            (reservation) => ({
                ...reservation,
                createdAt: reservation.createdAt.toISOString(),
                date: reservation.date.toISOString(),
            }));
    } catch (error: any) {
        throw new Error(error);
    }
}