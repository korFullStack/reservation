import React from 'react';
import Image from "next/image";

const Add = () => {
    return (
        <div className='min-h-screen'>
            <div className="flex justify-between w-full p-6 items-center">
                <div className="flex-1">
                    <button className='flex items-center bg-[#f6f6f6] text-[#ec551f] text-xl p-4 rounded-xl bg-gradient-to-b from-[#fefefe] to-[#f6f6f6] shadow-md'>
                        <Image src='icons/keyboard_backspace.svg' alt='back' width={30} height={30}/>
                    </button>
                </div>
                <div className="flex-1">
                    <h1 className='text-center text-2xl font-semibold'>New Reservation</h1>
                </div>
                <div className="flex-1 text-right">
                    <button className='text-2xl'>
                        <Image src='icons/close.svg' alt='close' width={30} height={30}/>
                    </button>
                </div>
            </div>
            <div className='flex w-full p-6 gap-3 justify-between'>
                <input/>
                <input/>
                <input/>
            </div>
        </div>
    );
};

export default Add;