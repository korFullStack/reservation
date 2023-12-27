"use client";
import Image from 'next/image'
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter()
  const handleAdd = () => {
    router.push('/add')
  }
  return (
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="flex justify-between w-full p-6 bg-white items-center">
          <div className="flex-1">
            <button onClick={handleAdd} className='flex items-center bg-[#f6f6f6] text-[#ec551f] text-xl p-4 rounded-xl bg-gradient-to-b from-[#fefefe] to-[#f6f6f6] shadow-md'>
              <Image src='icons/add.svg' alt='add' width={30} height={30}/>
              New Reservation
            </button>
          </div>
          <div className="flex-1">
            <h1 className='text-center text-xl font-semibold'>Reservation</h1>
          </div>
          <div className="flex-1 text-right">
            <button className='text-2xl'><i className="fa-solid fa-xmark"></i></button>
          </div>
        </div>
      </main>
  )
}
