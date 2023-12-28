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
      <div className="BOOKING_LIST">
        {/*BOOKING HEADER*/}
        <div className="bg-white grid grid-cols-3 items-center p-6">
          {/*ADD BTN*/}
          <div className="ADD_BTN">
            <button className="flex items-center gap-1 text-[#ec5823] font-medium p-4 rounded-lg bg-gradient-to-b from-[#fdfdfc] to-[#f6f6f6] shadow-lg shadow-gray-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id=" Round / Content / add"><path id="&#240;&#159;&#148;&#185;Icon Color" fillRule="evenodd" clipRule="evenodd" d="M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" fill="#EC551F"/></g></svg>
              <span className="max-md:hidden">New Reservation</span>
            </button>
          </div>
          {/*TITLE*/}
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Reservation</h1>
          </div>
          {/*CLOSE BTN*/}
          <div className="CLOSE_BTN">
            <button className="flex items-center ml-auto">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="close"><path id="close_2" d="M8.30056 6.41482C7.77986 5.89412 6.93564 5.89412 6.41494 6.41482C5.89424 6.93552 5.89424 7.77974 6.41494 8.30043L14.1146 16.0001L6.41502 23.6996C5.89432 24.2203 5.89432 25.0646 6.41502 25.5853C6.93572 26.106 7.77994 26.106 8.30064 25.5853L16.0002 17.8857L23.6998 25.5853C24.2205 26.106 25.0647 26.106 25.5854 25.5853C26.1061 25.0646 26.1061 24.2203 25.5854 23.6996L17.8858 16.0001L25.5855 8.30043C26.1062 7.77974 26.1062 6.93552 25.5855 6.41482C25.0648 5.89412 24.2206 5.89412 23.6999 6.41482L16.0002 14.1145L8.30056 6.41482Z" fill="#57534E"/></g></svg>
            </button>
          </div>
        </div>

        {/*BOOKING LIST*/}
        <div className="p-6 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6">
          {/*BOOKING ITEM*/}
          <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <h4 className="font-semibold">David</h4>
              <div className="flex items-center gap-1.5 py-2 px-2.5 rounded-2xl bg-gradient-to-b from-[#fdfdfc] to-[#f6f6f6] shadow-md shadow-gray-300 text-sm text-[#a8a29e]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g id=" Round / Communication / phone"><path id="&#240;&#159;&#148;&#185;Icon Color" fillRule="evenodd" clipRule="evenodd" d="M14.4223 11.4448L12.5173 11.2273C12.0598 11.1748 11.6098 11.3323 11.2873 11.6548L9.90729 13.0348C7.78479 11.9548 6.04479 10.2223 4.96479 8.09232L6.35229 6.70482C6.67479 6.38232 6.83229 5.93232 6.77979 5.47482L6.56229 3.58482C6.47229 2.82732 5.83479 2.25732 5.06979 2.25732H3.77229C2.92479 2.25732 2.21979 2.96232 2.27229 3.80982C2.66979 10.2148 7.79229 15.3298 14.1898 15.7273C15.0373 15.7798 15.7423 15.0748 15.7423 14.2273V12.9298C15.7498 12.1723 15.1798 11.5348 14.4223 11.4448Z" fill="#A8A29E"/></g></svg>
                <span>012-345-6789</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id=" Round / Notification / event_available"><path id="&#240;&#159;&#148;&#185; Icon Color" fillRule="evenodd" clipRule="evenodd" d="M16.5 10.53C16.21 10.24 15.73 10.24 15.44 10.53L11.09 14.88L9.5 13.29C9.21 13 8.73 13 8.44 13.29C8.15 13.58 8.15 14.06 8.44 14.35L10.38 16.29C10.77 16.68 11.4 16.68 11.79 16.29L16.49 11.59C16.79 11.3 16.79 10.82 16.5 10.53ZM19.5 3H18.5V2C18.5 1.45 18.05 1 17.5 1C16.95 1 16.5 1.45 16.5 2V3H8.5V2C8.5 1.45 8.05 1 7.5 1C6.95 1 6.5 1.45 6.5 2V3H5.5C4.39 3 3.51 3.9 3.51 5L3.5 19C3.5 20.1 4.39 21 5.5 21H19.5C20.6 21 21.5 20.1 21.5 19V5C21.5 3.9 20.6 3 19.5 3ZM18.5 19H6.5C5.95 19 5.5 18.55 5.5 18V8H19.5V18C19.5 18.55 19.05 19 18.5 19Z" fill="#A8A29E"/></g></svg>
              <p>Today, 2:00 PM</p>
            </div>

            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id=" Round / Social / group"><path id="&#240;&#159;&#148;&#185; Icon Color" fillRule="evenodd" clipRule="evenodd" d="M13.333 9.1665C14.7163 9.1665 15.8247 8.04984 15.8247 6.6665C15.8247 5.28317 14.7163 4.1665 13.333 4.1665C11.9497 4.1665 10.833 5.28317 10.833 6.6665C10.833 8.04984 11.9497 9.1665 13.333 9.1665ZM6.66634 9.1665C8.04967 9.1665 9.15801 8.04984 9.15801 6.6665C9.15801 5.28317 8.04967 4.1665 6.66634 4.1665C5.28301 4.1665 4.16634 5.28317 4.16634 6.6665C4.16634 8.04984 5.28301 9.1665 6.66634 9.1665ZM6.66634 10.8332C4.72467 10.8332 0.833008 11.8082 0.833008 13.7498V14.9998C0.833008 15.4582 1.20801 15.8332 1.66634 15.8332H11.6663C12.1247 15.8332 12.4997 15.4582 12.4997 14.9998V13.7498C12.4997 11.8082 8.60801 10.8332 6.66634 10.8332ZM13.333 10.8332C13.0913 10.8332 12.8163 10.8498 12.5247 10.8748C12.5413 10.8832 12.5497 10.8998 12.558 10.9082C13.508 11.5998 14.1663 12.5248 14.1663 13.7498V14.9998C14.1663 15.2915 14.108 15.5748 14.0163 15.8332H18.333C18.7913 15.8332 19.1663 15.4582 19.1663 14.9998V13.7498C19.1663 11.8082 15.2747 10.8332 13.333 10.8332Z" fill="#A8A29E"/></g></svg>
              <p>5</p>
            </div>

            <div className="flex items-center gap-2 text-[#57534e]">
              <p>Reserved Table</p>
              <p className="text-lg text-[#292524]">7,8</p>
              <p>•</p>
              <p>Floor 1</p>
            </div>

            <div className="flex items-center gap-2">
              <p>Birthday</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id=" Round / Image / edit"><path id="&#240;&#159;&#148;&#185; Icon Color" fillRule="evenodd" clipRule="evenodd" d="M3 17.4601V20.5001C3 20.7801 3.22 21.0001 3.5 21.0001H6.54C6.67 21.0001 6.8 20.9501 6.89 20.8501L17.81 9.94006L14.06 6.19006L3.15 17.1001C3.05 17.2001 3 17.3201 3 17.4601ZM20.71 7.04006C21.1 6.65006 21.1 6.02006 20.71 5.63006L18.37 3.29006C17.98 2.90006 17.35 2.90006 16.96 3.29006L15.13 5.12006L18.88 8.87006L20.71 7.04006Z" fill="#57534E"/></g></svg>
            </div>

            <div className="flex gap-5 mt-auto">
              <button className="flex items-center p-4 rounded-xl bg-gradient-to-b from-[#fdfdfc] to-[#f6f6f6] shadow-md shadow-gray-300">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="trash"><g id="trash_2"><path fillRule="evenodd" clipRule="evenodd" d="M8.16667 5.83325V4.66659C8.16667 3.37792 9.21134 2.33325 10.5 2.33325H17.5C18.7887 2.33325 19.8333 3.37792 19.8333 4.66658V5.83325H23.3333C23.9777 5.83325 24.5 6.35559 24.5 6.99992C24.5 7.64425 23.9777 8.16658 23.3333 8.16658H22.1667V20.9999C22.1667 22.9329 20.5997 24.4999 18.6667 24.4999H9.33333C7.40034 24.4999 5.83333 22.9329 5.83333 20.9999V8.16658H4.66667C4.02234 8.16658 3.5 7.64425 3.5 6.99992C3.5 6.35559 4.02234 5.83325 4.66667 5.83325H8.16667ZM10.5 4.66659H17.5V5.83325H10.5V4.66659ZM8.16667 8.16658H19.8333V20.9999C19.8333 21.6442 19.311 22.1666 18.6667 22.1666H9.33333C8.689 22.1666 8.16667 21.6442 8.16667 20.9999V8.16658Z" fill="#DC2626"/><path d="M17.5 10.4999H15.1667V19.8333H17.5V10.4999Z" fill="#DC2626"/><path d="M12.8333 10.4999H10.5V19.8333H12.8333V10.4999Z" fill="#DC2626"/></g></g></svg>
              </button>
              <button className="flex-grow p-4 rounded-xl bg-gradient-to-b from-[#f0764b] to-[#d84714] shadow-md shadow-gray-300 text-lg text-white text-center">
                Seated
              </button>
            </div>
          </div>
          {/*BOOKING ITEM*/}
          <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <h4 className="font-semibold">David</h4>
              <div className="flex items-center gap-1.5 py-2 px-2.5 rounded-2xl bg-gradient-to-b from-[#fdfdfc] to-[#f6f6f6] shadow-md shadow-gray-300 text-sm text-[#a8a29e]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g id=" Round / Communication / phone"><path id="&#240;&#159;&#148;&#185;Icon Color" fillRule="evenodd" clipRule="evenodd" d="M14.4223 11.4448L12.5173 11.2273C12.0598 11.1748 11.6098 11.3323 11.2873 11.6548L9.90729 13.0348C7.78479 11.9548 6.04479 10.2223 4.96479 8.09232L6.35229 6.70482C6.67479 6.38232 6.83229 5.93232 6.77979 5.47482L6.56229 3.58482C6.47229 2.82732 5.83479 2.25732 5.06979 2.25732H3.77229C2.92479 2.25732 2.21979 2.96232 2.27229 3.80982C2.66979 10.2148 7.79229 15.3298 14.1898 15.7273C15.0373 15.7798 15.7423 15.0748 15.7423 14.2273V12.9298C15.7498 12.1723 15.1798 11.5348 14.4223 11.4448Z" fill="#A8A29E"/></g></svg>
                <span>012-345-6789</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id=" Round / Notification / event_available"><path id="&#240;&#159;&#148;&#185; Icon Color" fillRule="evenodd" clipRule="evenodd" d="M16.5 10.53C16.21 10.24 15.73 10.24 15.44 10.53L11.09 14.88L9.5 13.29C9.21 13 8.73 13 8.44 13.29C8.15 13.58 8.15 14.06 8.44 14.35L10.38 16.29C10.77 16.68 11.4 16.68 11.79 16.29L16.49 11.59C16.79 11.3 16.79 10.82 16.5 10.53ZM19.5 3H18.5V2C18.5 1.45 18.05 1 17.5 1C16.95 1 16.5 1.45 16.5 2V3H8.5V2C8.5 1.45 8.05 1 7.5 1C6.95 1 6.5 1.45 6.5 2V3H5.5C4.39 3 3.51 3.9 3.51 5L3.5 19C3.5 20.1 4.39 21 5.5 21H19.5C20.6 21 21.5 20.1 21.5 19V5C21.5 3.9 20.6 3 19.5 3ZM18.5 19H6.5C5.95 19 5.5 18.55 5.5 18V8H19.5V18C19.5 18.55 19.05 19 18.5 19Z" fill="#A8A29E"/></g></svg>
              <p>Today, 2:00 PM</p>
            </div>

            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id=" Round / Social / group"><path id="&#240;&#159;&#148;&#185; Icon Color" fillRule="evenodd" clipRule="evenodd" d="M13.333 9.1665C14.7163 9.1665 15.8247 8.04984 15.8247 6.6665C15.8247 5.28317 14.7163 4.1665 13.333 4.1665C11.9497 4.1665 10.833 5.28317 10.833 6.6665C10.833 8.04984 11.9497 9.1665 13.333 9.1665ZM6.66634 9.1665C8.04967 9.1665 9.15801 8.04984 9.15801 6.6665C9.15801 5.28317 8.04967 4.1665 6.66634 4.1665C5.28301 4.1665 4.16634 5.28317 4.16634 6.6665C4.16634 8.04984 5.28301 9.1665 6.66634 9.1665ZM6.66634 10.8332C4.72467 10.8332 0.833008 11.8082 0.833008 13.7498V14.9998C0.833008 15.4582 1.20801 15.8332 1.66634 15.8332H11.6663C12.1247 15.8332 12.4997 15.4582 12.4997 14.9998V13.7498C12.4997 11.8082 8.60801 10.8332 6.66634 10.8332ZM13.333 10.8332C13.0913 10.8332 12.8163 10.8498 12.5247 10.8748C12.5413 10.8832 12.5497 10.8998 12.558 10.9082C13.508 11.5998 14.1663 12.5248 14.1663 13.7498V14.9998C14.1663 15.2915 14.108 15.5748 14.0163 15.8332H18.333C18.7913 15.8332 19.1663 15.4582 19.1663 14.9998V13.7498C19.1663 11.8082 15.2747 10.8332 13.333 10.8332Z" fill="#A8A29E"/></g></svg>
              <p>5</p>
            </div>

            <div className="flex items-center gap-2 text-[#57534e]">
              <p>Reserved Table</p>
              <p className="text-lg text-[#292524]">7,8</p>
              <p>•</p>
              <p>Floor 1</p>
            </div>

            <div className="flex items-center gap-2">
              <p>Birthday</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id=" Round / Image / edit"><path id="&#240;&#159;&#148;&#185; Icon Color" fillRule="evenodd" clipRule="evenodd" d="M3 17.4601V20.5001C3 20.7801 3.22 21.0001 3.5 21.0001H6.54C6.67 21.0001 6.8 20.9501 6.89 20.8501L17.81 9.94006L14.06 6.19006L3.15 17.1001C3.05 17.2001 3 17.3201 3 17.4601ZM20.71 7.04006C21.1 6.65006 21.1 6.02006 20.71 5.63006L18.37 3.29006C17.98 2.90006 17.35 2.90006 16.96 3.29006L15.13 5.12006L18.88 8.87006L20.71 7.04006Z" fill="#57534E"/></g></svg>
            </div>

            <div className="flex gap-5 mt-auto">
              <button className="flex items-center p-4 rounded-xl bg-gradient-to-b from-[#fdfdfc] to-[#f6f6f6] shadow-md shadow-gray-300">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="trash"><g id="trash_2"><path fillRule="evenodd" clipRule="evenodd" d="M8.16667 5.83325V4.66659C8.16667 3.37792 9.21134 2.33325 10.5 2.33325H17.5C18.7887 2.33325 19.8333 3.37792 19.8333 4.66658V5.83325H23.3333C23.9777 5.83325 24.5 6.35559 24.5 6.99992C24.5 7.64425 23.9777 8.16658 23.3333 8.16658H22.1667V20.9999C22.1667 22.9329 20.5997 24.4999 18.6667 24.4999H9.33333C7.40034 24.4999 5.83333 22.9329 5.83333 20.9999V8.16658H4.66667C4.02234 8.16658 3.5 7.64425 3.5 6.99992C3.5 6.35559 4.02234 5.83325 4.66667 5.83325H8.16667ZM10.5 4.66659H17.5V5.83325H10.5V4.66659ZM8.16667 8.16658H19.8333V20.9999C19.8333 21.6442 19.311 22.1666 18.6667 22.1666H9.33333C8.689 22.1666 8.16667 21.6442 8.16667 20.9999V8.16658Z" fill="#DC2626"/><path d="M17.5 10.4999H15.1667V19.8333H17.5V10.4999Z" fill="#DC2626"/><path d="M12.8333 10.4999H10.5V19.8333H12.8333V10.4999Z" fill="#DC2626"/></g></g></svg>
              </button>
              <button className="flex-grow p-4 rounded-xl bg-gradient-to-b from-[#f0764b] to-[#d84714] shadow-md shadow-gray-300 text-lg text-white text-center">
                Seated
              </button>
            </div>
          </div>
          {/*BOOKING ITEM NO SELECTED*/}
          <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <h4 className="font-semibold">David</h4>
              <div className="flex items-center gap-1.5 py-2 px-2.5 rounded-2xl bg-gradient-to-b from-[#fdfdfc] to-[#f6f6f6] shadow-md shadow-gray-300 text-sm text-[#a8a29e]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g id=" Round / Communication / phone"><path id="&#240;&#159;&#148;&#185;Icon Color" fillRule="evenodd" clipRule="evenodd" d="M14.4223 11.4448L12.5173 11.2273C12.0598 11.1748 11.6098 11.3323 11.2873 11.6548L9.90729 13.0348C7.78479 11.9548 6.04479 10.2223 4.96479 8.09232L6.35229 6.70482C6.67479 6.38232 6.83229 5.93232 6.77979 5.47482L6.56229 3.58482C6.47229 2.82732 5.83479 2.25732 5.06979 2.25732H3.77229C2.92479 2.25732 2.21979 2.96232 2.27229 3.80982C2.66979 10.2148 7.79229 15.3298 14.1898 15.7273C15.0373 15.7798 15.7423 15.0748 15.7423 14.2273V12.9298C15.7498 12.1723 15.1798 11.5348 14.4223 11.4448Z" fill="#A8A29E"/></g></svg>
                <span>012-345-6789</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id=" Round / Notification / event_available"><path id="&#240;&#159;&#148;&#185; Icon Color" fillRule="evenodd" clipRule="evenodd" d="M16.5 10.53C16.21 10.24 15.73 10.24 15.44 10.53L11.09 14.88L9.5 13.29C9.21 13 8.73 13 8.44 13.29C8.15 13.58 8.15 14.06 8.44 14.35L10.38 16.29C10.77 16.68 11.4 16.68 11.79 16.29L16.49 11.59C16.79 11.3 16.79 10.82 16.5 10.53ZM19.5 3H18.5V2C18.5 1.45 18.05 1 17.5 1C16.95 1 16.5 1.45 16.5 2V3H8.5V2C8.5 1.45 8.05 1 7.5 1C6.95 1 6.5 1.45 6.5 2V3H5.5C4.39 3 3.51 3.9 3.51 5L3.5 19C3.5 20.1 4.39 21 5.5 21H19.5C20.6 21 21.5 20.1 21.5 19V5C21.5 3.9 20.6 3 19.5 3ZM18.5 19H6.5C5.95 19 5.5 18.55 5.5 18V8H19.5V18C19.5 18.55 19.05 19 18.5 19Z" fill="#A8A29E"/></g></svg>
              <p>Today, 2:00 PM</p>
            </div>

            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id=" Round / Social / group"><path id="&#240;&#159;&#148;&#185; Icon Color" fillRule="evenodd" clipRule="evenodd" d="M13.333 9.1665C14.7163 9.1665 15.8247 8.04984 15.8247 6.6665C15.8247 5.28317 14.7163 4.1665 13.333 4.1665C11.9497 4.1665 10.833 5.28317 10.833 6.6665C10.833 8.04984 11.9497 9.1665 13.333 9.1665ZM6.66634 9.1665C8.04967 9.1665 9.15801 8.04984 9.15801 6.6665C9.15801 5.28317 8.04967 4.1665 6.66634 4.1665C5.28301 4.1665 4.16634 5.28317 4.16634 6.6665C4.16634 8.04984 5.28301 9.1665 6.66634 9.1665ZM6.66634 10.8332C4.72467 10.8332 0.833008 11.8082 0.833008 13.7498V14.9998C0.833008 15.4582 1.20801 15.8332 1.66634 15.8332H11.6663C12.1247 15.8332 12.4997 15.4582 12.4997 14.9998V13.7498C12.4997 11.8082 8.60801 10.8332 6.66634 10.8332ZM13.333 10.8332C13.0913 10.8332 12.8163 10.8498 12.5247 10.8748C12.5413 10.8832 12.5497 10.8998 12.558 10.9082C13.508 11.5998 14.1663 12.5248 14.1663 13.7498V14.9998C14.1663 15.2915 14.108 15.5748 14.0163 15.8332H18.333C18.7913 15.8332 19.1663 15.4582 19.1663 14.9998V13.7498C19.1663 11.8082 15.2747 10.8332 13.333 10.8332Z" fill="#A8A29E"/></g></svg>
              <p>5</p>
            </div>

            <p className="text-[#a8a29e] italic capitalize font-normal">No selected table</p>

            <div className="flex gap-5 mt-auto">
              <button className="flex items-center p-4 rounded-xl bg-gradient-to-b from-[#fdfdfc] to-[#f6f6f6] shadow-md shadow-gray-300">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="trash"><g id="trash_2"><path fillRule="evenodd" clipRule="evenodd" d="M8.16667 5.83325V4.66659C8.16667 3.37792 9.21134 2.33325 10.5 2.33325H17.5C18.7887 2.33325 19.8333 3.37792 19.8333 4.66658V5.83325H23.3333C23.9777 5.83325 24.5 6.35559 24.5 6.99992C24.5 7.64425 23.9777 8.16658 23.3333 8.16658H22.1667V20.9999C22.1667 22.9329 20.5997 24.4999 18.6667 24.4999H9.33333C7.40034 24.4999 5.83333 22.9329 5.83333 20.9999V8.16658H4.66667C4.02234 8.16658 3.5 7.64425 3.5 6.99992C3.5 6.35559 4.02234 5.83325 4.66667 5.83325H8.16667ZM10.5 4.66659H17.5V5.83325H10.5V4.66659ZM8.16667 8.16658H19.8333V20.9999C19.8333 21.6442 19.311 22.1666 18.6667 22.1666H9.33333C8.689 22.1666 8.16667 21.6442 8.16667 20.9999V8.16658Z" fill="#DC2626"/><path d="M17.5 10.4999H15.1667V19.8333H17.5V10.4999Z" fill="#DC2626"/><path d="M12.8333 10.4999H10.5V19.8333H12.8333V10.4999Z" fill="#DC2626"/></g></g></svg>
              </button>
              <button className="flex-grow p-4 rounded-xl bg-gradient-to-b from-[#f0764b] to-[#d84714] shadow-md shadow-gray-300 text-lg text-white text-center">
                Seated
              </button>
            </div>
          </div>
          {/*BOOKING ITEM NO SELECTED*/}
          <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <h4 className="font-semibold">David</h4>
              <div className="flex items-center gap-1.5 py-2 px-2.5 rounded-2xl bg-gradient-to-b from-[#fdfdfc] to-[#f6f6f6] shadow-md shadow-gray-300 text-sm text-[#a8a29e]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g id=" Round / Communication / phone"><path id="&#240;&#159;&#148;&#185;Icon Color" fillRule="evenodd" clipRule="evenodd" d="M14.4223 11.4448L12.5173 11.2273C12.0598 11.1748 11.6098 11.3323 11.2873 11.6548L9.90729 13.0348C7.78479 11.9548 6.04479 10.2223 4.96479 8.09232L6.35229 6.70482C6.67479 6.38232 6.83229 5.93232 6.77979 5.47482L6.56229 3.58482C6.47229 2.82732 5.83479 2.25732 5.06979 2.25732H3.77229C2.92479 2.25732 2.21979 2.96232 2.27229 3.80982C2.66979 10.2148 7.79229 15.3298 14.1898 15.7273C15.0373 15.7798 15.7423 15.0748 15.7423 14.2273V12.9298C15.7498 12.1723 15.1798 11.5348 14.4223 11.4448Z" fill="#A8A29E"/></g></svg>
                <span>012-345-6789</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id=" Round / Notification / event_available"><path id="&#240;&#159;&#148;&#185; Icon Color" fillRule="evenodd" clipRule="evenodd" d="M16.5 10.53C16.21 10.24 15.73 10.24 15.44 10.53L11.09 14.88L9.5 13.29C9.21 13 8.73 13 8.44 13.29C8.15 13.58 8.15 14.06 8.44 14.35L10.38 16.29C10.77 16.68 11.4 16.68 11.79 16.29L16.49 11.59C16.79 11.3 16.79 10.82 16.5 10.53ZM19.5 3H18.5V2C18.5 1.45 18.05 1 17.5 1C16.95 1 16.5 1.45 16.5 2V3H8.5V2C8.5 1.45 8.05 1 7.5 1C6.95 1 6.5 1.45 6.5 2V3H5.5C4.39 3 3.51 3.9 3.51 5L3.5 19C3.5 20.1 4.39 21 5.5 21H19.5C20.6 21 21.5 20.1 21.5 19V5C21.5 3.9 20.6 3 19.5 3ZM18.5 19H6.5C5.95 19 5.5 18.55 5.5 18V8H19.5V18C19.5 18.55 19.05 19 18.5 19Z" fill="#A8A29E"/></g></svg>
              <p>Today, 2:00 PM</p>
            </div>

            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id=" Round / Social / group"><path id="&#240;&#159;&#148;&#185; Icon Color" fillRule="evenodd" clipRule="evenodd" d="M13.333 9.1665C14.7163 9.1665 15.8247 8.04984 15.8247 6.6665C15.8247 5.28317 14.7163 4.1665 13.333 4.1665C11.9497 4.1665 10.833 5.28317 10.833 6.6665C10.833 8.04984 11.9497 9.1665 13.333 9.1665ZM6.66634 9.1665C8.04967 9.1665 9.15801 8.04984 9.15801 6.6665C9.15801 5.28317 8.04967 4.1665 6.66634 4.1665C5.28301 4.1665 4.16634 5.28317 4.16634 6.6665C4.16634 8.04984 5.28301 9.1665 6.66634 9.1665ZM6.66634 10.8332C4.72467 10.8332 0.833008 11.8082 0.833008 13.7498V14.9998C0.833008 15.4582 1.20801 15.8332 1.66634 15.8332H11.6663C12.1247 15.8332 12.4997 15.4582 12.4997 14.9998V13.7498C12.4997 11.8082 8.60801 10.8332 6.66634 10.8332ZM13.333 10.8332C13.0913 10.8332 12.8163 10.8498 12.5247 10.8748C12.5413 10.8832 12.5497 10.8998 12.558 10.9082C13.508 11.5998 14.1663 12.5248 14.1663 13.7498V14.9998C14.1663 15.2915 14.108 15.5748 14.0163 15.8332H18.333C18.7913 15.8332 19.1663 15.4582 19.1663 14.9998V13.7498C19.1663 11.8082 15.2747 10.8332 13.333 10.8332Z" fill="#A8A29E"/></g></svg>
              <p>5</p>
            </div>

            <p className="text-[#a8a29e] italic capitalize font-normal">No selected table</p>

            <div className="flex gap-5 mt-auto">
              <button className="flex items-center p-4 rounded-xl bg-gradient-to-b from-[#fdfdfc] to-[#f6f6f6] shadow-md shadow-gray-300">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="trash"><g id="trash_2"><path fillRule="evenodd" clipRule="evenodd" d="M8.16667 5.83325V4.66659C8.16667 3.37792 9.21134 2.33325 10.5 2.33325H17.5C18.7887 2.33325 19.8333 3.37792 19.8333 4.66658V5.83325H23.3333C23.9777 5.83325 24.5 6.35559 24.5 6.99992C24.5 7.64425 23.9777 8.16658 23.3333 8.16658H22.1667V20.9999C22.1667 22.9329 20.5997 24.4999 18.6667 24.4999H9.33333C7.40034 24.4999 5.83333 22.9329 5.83333 20.9999V8.16658H4.66667C4.02234 8.16658 3.5 7.64425 3.5 6.99992C3.5 6.35559 4.02234 5.83325 4.66667 5.83325H8.16667ZM10.5 4.66659H17.5V5.83325H10.5V4.66659ZM8.16667 8.16658H19.8333V20.9999C19.8333 21.6442 19.311 22.1666 18.6667 22.1666H9.33333C8.689 22.1666 8.16667 21.6442 8.16667 20.9999V8.16658Z" fill="#DC2626"/><path d="M17.5 10.4999H15.1667V19.8333H17.5V10.4999Z" fill="#DC2626"/><path d="M12.8333 10.4999H10.5V19.8333H12.8333V10.4999Z" fill="#DC2626"/></g></g></svg>
              </button>
              <button className="flex-grow p-4 rounded-xl bg-gradient-to-b from-[#f0764b] to-[#d84714] shadow-md shadow-gray-300 text-lg text-white text-center">
                Seated
              </button>
            </div>
          </div>
          {/*BOOKING ITEM*/}
          <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <h4 className="font-semibold">David</h4>
              <div className="flex items-center gap-1.5 py-2 px-2.5 rounded-2xl bg-gradient-to-b from-[#fdfdfc] to-[#f6f6f6] shadow-md shadow-gray-300 text-sm text-[#a8a29e]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g id=" Round / Communication / phone"><path id="&#240;&#159;&#148;&#185;Icon Color" fillRule="evenodd" clipRule="evenodd" d="M14.4223 11.4448L12.5173 11.2273C12.0598 11.1748 11.6098 11.3323 11.2873 11.6548L9.90729 13.0348C7.78479 11.9548 6.04479 10.2223 4.96479 8.09232L6.35229 6.70482C6.67479 6.38232 6.83229 5.93232 6.77979 5.47482L6.56229 3.58482C6.47229 2.82732 5.83479 2.25732 5.06979 2.25732H3.77229C2.92479 2.25732 2.21979 2.96232 2.27229 3.80982C2.66979 10.2148 7.79229 15.3298 14.1898 15.7273C15.0373 15.7798 15.7423 15.0748 15.7423 14.2273V12.9298C15.7498 12.1723 15.1798 11.5348 14.4223 11.4448Z" fill="#A8A29E"/></g></svg>
                <span>012-345-6789</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id=" Round / Notification / event_available"><path id="&#240;&#159;&#148;&#185; Icon Color" fillRule="evenodd" clipRule="evenodd" d="M16.5 10.53C16.21 10.24 15.73 10.24 15.44 10.53L11.09 14.88L9.5 13.29C9.21 13 8.73 13 8.44 13.29C8.15 13.58 8.15 14.06 8.44 14.35L10.38 16.29C10.77 16.68 11.4 16.68 11.79 16.29L16.49 11.59C16.79 11.3 16.79 10.82 16.5 10.53ZM19.5 3H18.5V2C18.5 1.45 18.05 1 17.5 1C16.95 1 16.5 1.45 16.5 2V3H8.5V2C8.5 1.45 8.05 1 7.5 1C6.95 1 6.5 1.45 6.5 2V3H5.5C4.39 3 3.51 3.9 3.51 5L3.5 19C3.5 20.1 4.39 21 5.5 21H19.5C20.6 21 21.5 20.1 21.5 19V5C21.5 3.9 20.6 3 19.5 3ZM18.5 19H6.5C5.95 19 5.5 18.55 5.5 18V8H19.5V18C19.5 18.55 19.05 19 18.5 19Z" fill="#A8A29E"/></g></svg>
              <p>Today, 2:00 PM</p>
            </div>

            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id=" Round / Social / group"><path id="&#240;&#159;&#148;&#185; Icon Color" fillRule="evenodd" clipRule="evenodd" d="M13.333 9.1665C14.7163 9.1665 15.8247 8.04984 15.8247 6.6665C15.8247 5.28317 14.7163 4.1665 13.333 4.1665C11.9497 4.1665 10.833 5.28317 10.833 6.6665C10.833 8.04984 11.9497 9.1665 13.333 9.1665ZM6.66634 9.1665C8.04967 9.1665 9.15801 8.04984 9.15801 6.6665C9.15801 5.28317 8.04967 4.1665 6.66634 4.1665C5.28301 4.1665 4.16634 5.28317 4.16634 6.6665C4.16634 8.04984 5.28301 9.1665 6.66634 9.1665ZM6.66634 10.8332C4.72467 10.8332 0.833008 11.8082 0.833008 13.7498V14.9998C0.833008 15.4582 1.20801 15.8332 1.66634 15.8332H11.6663C12.1247 15.8332 12.4997 15.4582 12.4997 14.9998V13.7498C12.4997 11.8082 8.60801 10.8332 6.66634 10.8332ZM13.333 10.8332C13.0913 10.8332 12.8163 10.8498 12.5247 10.8748C12.5413 10.8832 12.5497 10.8998 12.558 10.9082C13.508 11.5998 14.1663 12.5248 14.1663 13.7498V14.9998C14.1663 15.2915 14.108 15.5748 14.0163 15.8332H18.333C18.7913 15.8332 19.1663 15.4582 19.1663 14.9998V13.7498C19.1663 11.8082 15.2747 10.8332 13.333 10.8332Z" fill="#A8A29E"/></g></svg>
              <p>5</p>
            </div>

            <div className="flex items-center gap-2 text-[#57534e]">
              <p>Reserved Table</p>
              <p className="text-lg text-[#292524]">7,8</p>
              <p>•</p>
              <p>Floor 1</p>
            </div>

            <div className="flex items-center gap-2">
              <p>Birthday</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id=" Round / Image / edit"><path id="&#240;&#159;&#148;&#185; Icon Color" fillRule="evenodd" clipRule="evenodd" d="M3 17.4601V20.5001C3 20.7801 3.22 21.0001 3.5 21.0001H6.54C6.67 21.0001 6.8 20.9501 6.89 20.8501L17.81 9.94006L14.06 6.19006L3.15 17.1001C3.05 17.2001 3 17.3201 3 17.4601ZM20.71 7.04006C21.1 6.65006 21.1 6.02006 20.71 5.63006L18.37 3.29006C17.98 2.90006 17.35 2.90006 16.96 3.29006L15.13 5.12006L18.88 8.87006L20.71 7.04006Z" fill="#57534E"/></g></svg>
            </div>

            <div className="flex gap-5 mt-auto">
              <button className="flex items-center p-4 rounded-xl bg-gradient-to-b from-[#fdfdfc] to-[#f6f6f6] shadow-md shadow-gray-300">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="trash"><g id="trash_2"><path fillRule="evenodd" clipRule="evenodd" d="M8.16667 5.83325V4.66659C8.16667 3.37792 9.21134 2.33325 10.5 2.33325H17.5C18.7887 2.33325 19.8333 3.37792 19.8333 4.66658V5.83325H23.3333C23.9777 5.83325 24.5 6.35559 24.5 6.99992C24.5 7.64425 23.9777 8.16658 23.3333 8.16658H22.1667V20.9999C22.1667 22.9329 20.5997 24.4999 18.6667 24.4999H9.33333C7.40034 24.4999 5.83333 22.9329 5.83333 20.9999V8.16658H4.66667C4.02234 8.16658 3.5 7.64425 3.5 6.99992C3.5 6.35559 4.02234 5.83325 4.66667 5.83325H8.16667ZM10.5 4.66659H17.5V5.83325H10.5V4.66659ZM8.16667 8.16658H19.8333V20.9999C19.8333 21.6442 19.311 22.1666 18.6667 22.1666H9.33333C8.689 22.1666 8.16667 21.6442 8.16667 20.9999V8.16658Z" fill="#DC2626"/><path d="M17.5 10.4999H15.1667V19.8333H17.5V10.4999Z" fill="#DC2626"/><path d="M12.8333 10.4999H10.5V19.8333H12.8333V10.4999Z" fill="#DC2626"/></g></g></svg>
              </button>
              <button className="flex-grow p-4 rounded-xl bg-gradient-to-b from-[#f0764b] to-[#d84714] shadow-md shadow-gray-300 text-lg text-white text-center">
                Seated
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}
