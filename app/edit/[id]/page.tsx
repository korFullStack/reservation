import React from 'react';
import EditReservation from '@/components/editReservation';
import getReservations from "@/app/actions/getReservations";

const Edit =async ({ params }: { params: { id: string } }) => {
    const [reservation] = await getReservations(params.id)
    return <EditReservation reservation={reservation} />;
};

export default Edit;