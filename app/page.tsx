import ListReservation from "@/components/listResversation";
import getReservations from "@/app/actions/getReservations";

export default async function Home() {
  const list = await getReservations()
  return (
      <ListReservation listReservation={list}/>
  )
}
