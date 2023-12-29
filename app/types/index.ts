export interface IReservation {
    id : string
    name : string
    phoneNumber : string
    date :string
    table : number[]
    description : string | null
    floor : number[]
    guests : number
    createdAt : string
}