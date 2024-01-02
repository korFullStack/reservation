'use client';
import React, {useRef, useState} from 'react';
import Select, { MultiValue, SingleValue, StylesConfig } from 'react-select';
import makeAnimated from 'react-select/animated';
import { useRouter } from 'next/navigation';
import {toast, Toaster} from 'react-hot-toast';
import axios from 'axios';
import {Timeit} from "react-timeit";
import { IReservation } from '@/app/types';

interface Options {
    value: Record<string, number>;
    label: string;
}

const AddReservation = () => {
    const newHour = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const newDate = new Date().toLocaleString('en-US', { month: 'short', day: 'numeric' })
    const [data, setData] = useState<Partial<IReservation>>({
        guests: 1,
        date : new Date().toDateString()
    });
    const [openTimePicker , setOpenTimePicker] = useState(false)
    const animatedComponents = makeAnimated();
    const options: Options[] = [
        {
            value: {
                table: 1,
                floor: 1,
            },
            label: 'Table 1 - Floor 1',
        },
        {
            value: {
                table: 2,
                floor: 1,
            },
            label: 'Table 2 - Floor 1',
        },
        {
            value: {
                table: 1,
                floor: 2,
            },
            label: 'Table 1 - Floor 2',
        },
        {
            value: {
                table: 2,
                floor: 2,
            },
            label: 'Table 2 - Floor 2',
        },
    ];
    const styles: StylesConfig<Options> = {
        container: (c) => ({
            ...c,
            padding: '0',
        }),
        control: (c) => ({
            ...c,
            borderColor: '#ccc !important',
            padding: '0.5rem',
            height: '60px',
            borderRadius: '0.5rem',
            outline: 'none !important',
            boxShadow: 'none',
        }),
        multiValue: (c) => ({
            ...c,
            background: '#f5f5f4',
            borderRadius: '1rem',
            padding: '2px 4px',
        }),
        multiValueRemove: (c) => ({
            ...c,
            '&:hover': {
                background: '#f5f5f4',
            },
        }),
        indicatorSeparator: () => ({
            display: 'none',
        }),
    };
    const router = useRouter();
    const selectRef = useRef<any>(null)
    const handleClick = () => {
        router.push('/');
    };

    const handleIncrease = () => {
        const guests = data.guests || 0;
        setData((pre) => ({ ...pre, guests: guests + 1 }));
    };
    const handleDecrease = () => {
        const guests = data.guests || 0;
        if (guests > 0) {
            setData((pre) => ({ ...pre, guests: guests - 1 }));
        }
    };
    const handleCreate = () => {
        const params: MultiValue<Options> = selectRef.current.getValue()
        const date = data.date ? new Date(data.date) : new Date()
        if (data) {
            axios
                .post('/api/reservations', {
                    ...data ,
                    date,
                    table : params.map(item=>item.value.table),
                    floor : params.map(item=>item.value.floor),
                })
                .then(() => {
                    router.push('/')
                })
                .then(()=> {
                    toast.success('Listing reserved!');
                    router.refresh()
                })
                .catch(() => {
                    toast.error('Something went wrong.');
                });
        }
    };
    return (
        <div className="BOOKING_ADD">
            {/*BOOKING HEADER*/}
            <div className="bg-white grid grid-cols-3 items-center p-6">
                {/*ADD BTN*/}
                <div className="ADD_BTN">
                    <button
                        onClick={handleClick}
                        className="flex items-center gap-1 text-[#ec5823] font-medium p-4 rounded-lg bg-gradient-to-b from-[#fdfdfc] to-[#f6f6f6] shadow-lg shadow-gray-300"
                    >
                        <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id=" Round / Hardware / keyboard_backspace">
                                <path
                                    id="&#240;&#159;&#148;&#185; Icon Color"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M29.9997 16.5H10.2447L14.5647 12.18C15.1497 11.595 15.1497 10.65 14.5647 10.065C13.9797 9.47997 13.0347 9.47997 12.4497 10.065L5.56473 16.95C4.97973 17.535 4.97973 18.48 5.56473 19.065L12.4497 25.95C13.0347 26.535 13.9797 26.535 14.5647 25.95C15.1497 25.365 15.1497 24.42 14.5647 23.835L10.2447 19.5H29.9997C30.8247 19.5 31.4997 18.825 31.4997 18C31.4997 17.175 30.8247 16.5 29.9997 16.5Z"
                                    fill="#57534E"
                                />
                            </g>
                        </svg>
                    </button>
                </div>
                {/*TITLE*/}
                <div className="text-center">
                    <h1 className="text-2xl font-semibold">New Reservation</h1>
                </div>
                {/*CLOSE BTN*/}
                <div className="CLOSE_BTN">
                    <button
                        onClick={handleClick}
                        className="flex items-center ml-auto"
                    >
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="close">
                                <path
                                    id="close_2"
                                    d="M8.30056 6.41482C7.77986 5.89412 6.93564 5.89412 6.41494 6.41482C5.89424 6.93552 5.89424 7.77974 6.41494 8.30043L14.1146 16.0001L6.41502 23.6996C5.89432 24.2203 5.89432 25.0646 6.41502 25.5853C6.93572 26.106 7.77994 26.106 8.30064 25.5853L16.0002 17.8857L23.6998 25.5853C24.2205 26.106 25.0647 26.106 25.5854 25.5853C26.1061 25.0646 26.1061 24.2203 25.5854 23.6996L17.8858 16.0001L25.5855 8.30043C26.1062 7.77974 26.1062 6.93552 25.5855 6.41482C25.0648 5.89412 24.2206 5.89412 23.6999 6.41482L16.0002 14.1145L8.30056 6.41482Z"
                                    fill="#57534E"
                                />
                            </g>
                        </svg>
                    </button>
                </div>
            </div>

            {/*BOOKING FORM*/}
            <div className="BOOKING_FORM bg-white flex flex-col gap-7 p-6">
                {/*ROW_ITEM*/}
                <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6">
                    {/*INPUT NAME*/}
                    <div className="relative">
                        <input
                            type="text"
                            id="input_name"
                            className="block px-6 pb-4 pt-5 w-full text-base bg-transparent rounded-lg border border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            value={data?.name}
                            onChange={(e) =>
                                setData((pre) => ({
                                    ...pre,
                                    name: e.target.value,
                                }))
                            }
                        />
                        <label
                            htmlFor="input_name"
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 start-4"
                        >
                            Name <span className="text-red-500">*</span>
                        </label>
                    </div>
                    {/*INPUT PHONE*/}
                    <div className="relative">
                        <input
                            type="text"
                            id="input_phone"
                            className="block px-6 pb-4 pt-5 w-full text-base bg-transparent rounded-lg border border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            value={data?.phoneNumber}
                            onChange={(e) =>
                                setData((pre) => ({
                                    ...pre,
                                    phoneNumber: e.target.value,
                                }))
                            }
                        />
                        <label
                            htmlFor="input_phone"
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 start-4"
                        >
                            Phone <span className="text-red-500">*</span>
                        </label>
                    </div>
                    {/*BUTTON TIME*/}
                    <div>
                        <button onClick={()=>setOpenTimePicker(true)} className="w-full flex items-center justify-center gap-1 p-4 rounded-lg bg-gradient-to-b from-[#fdfdfc] to-[#f6f6f6] shadow-lg shadow-gray-300">
                            <svg
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id=" Round / Notification / event_available">
                                    <path
                                        id="&#240;&#159;&#148;&#185; Icon Color"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16.5 10.53C16.21 10.24 15.73 10.24 15.44 10.53L11.09 14.88L9.5 13.29C9.21 13 8.73 13 8.44 13.29C8.15 13.58 8.15 14.06 8.44 14.35L10.38 16.29C10.77 16.68 11.4 16.68 11.79 16.29L16.49 11.59C16.79 11.3 16.79 10.82 16.5 10.53ZM19.5 3H18.5V2C18.5 1.45 18.05 1 17.5 1C16.95 1 16.5 1.45 16.5 2V3H8.5V2C8.5 1.45 8.05 1 7.5 1C6.95 1 6.5 1.45 6.5 2V3H5.5C4.39 3 3.51 3.9 3.51 5L3.5 19C3.5 20.1 4.39 21 5.5 21H19.5C20.6 21 21.5 20.1 21.5 19V5C21.5 3.9 20.6 3 19.5 3ZM18.5 19H6.5C5.95 19 5.5 18.55 5.5 18V8H19.5V18C19.5 18.55 19.05 19 18.5 19Z"
                                        fill="#A8A29E"
                                    />
                                </g>
                            </svg>
                            <span>Today, {newHour}</span>
                        </button>
                    </div>
                </div>

                {/*ROW_ITEM*/}
                <div className="bg-white grid grid-cols-2 max-md:grid-cols-1 gap-6">
                    {/*GUEST*/}
                    <div className="flex items-center gap-4">
                        <span>Guest</span>
                        <button
                            onClick={handleDecrease}
                            className="flex items-center justify-center gap-1 p-3 rounded-lg bg-gradient-to-b from-[#fdfdfc] to-[#f6f6f6] shadow-lg shadow-gray-300"
                        >
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="math-minus">
                                    <path
                                        id="math-minus_2"
                                        d="M6.66699 19.9999C6.66699 19.0794 7.41318 18.3333 8.33366 18.3333H31.667C32.5875 18.3333 33.3337 19.0794 33.3337 19.9999C33.3337 20.9204 32.5875 21.6666 31.667 21.6666H8.33366C7.41318 21.6666 6.66699 20.9204 6.66699 19.9999Z"
                                        fill="#57534E"
                                    />
                                </g>
                            </svg>
                        </button>
                        <span className="px-3 text-2xl">{data.guests}</span>
                        <button
                            onClick={handleIncrease}
                            className="flex items-center justify-center gap-1 p-3 rounded-lg bg-gradient-to-b from-[#fdfdfc] to-[#f6f6f6] shadow-lg shadow-gray-300"
                        >
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="math-plus">
                                    <path
                                        id="math-plus_2"
                                        d="M20.0003 6.66675C19.0799 6.66675 18.3337 7.41294 18.3337 8.33341V18.3334H8.33366C7.41318 18.3334 6.66699 19.0796 6.66699 20.0001C6.66699 20.9206 7.41318 21.6667 8.33366 21.6667H18.3337V31.6667C18.3337 32.5872 19.0799 33.3334 20.0003 33.3334C20.9208 33.3334 21.667 32.5872 21.667 31.6667V21.6667H31.667C32.5875 21.6667 33.3337 20.9206 33.3337 20.0001C33.3337 19.0796 32.5875 18.3334 31.667 18.3334H21.667V8.33341C21.667 7.41294 20.9208 6.66675 20.0003 6.66675Z"
                                        fill="#57534E"
                                    />
                                </g>
                            </svg>
                        </button>
                    </div>
                    {/*SELECT TABLE*/}
                    <div className="relative">
                        {/*<input*/}
                        {/*    type="text" id="input_phone"*/}
                        {/*    className="block px-6 pb-4 pt-5 w-full text-base bg-transparent rounded-lg border border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"*/}
                        {/*    placeholder=" "*/}
                        {/*/>*/}
                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            defaultValue={[]}
                            isMulti
                            options={options}
                            styles={styles}
                            // onChange={handleChangeSelect}
                            ref={selectRef}
                        />
                    </div>
                </div>

                {/*ROW_ITEM*/}
                <div className="bg-white">
                    <textarea
                        cols={30}
                        rows={10}
                        className="block px-6 pb-4 pt-5 w-full text-base bg-transparent rounded-lg border border-1 border-gray-300 resize-none outline-none"
                        placeholder="Add Note...&#9998;"
                        value={data.description || ''}
                        onChange={(e)=> setData(pre=>({...pre,description : e.target.value}))}
                    ></textarea>
                </div>

                {/*ACTION BUTTON*/}
                <div className="flex gap-5 mt-8">
                    {/*<button className="flex items-center p-6 rounded-xl bg-gradient-to-b from-[#fdfdfc] to-[#f6f6f6] shadow-md shadow-gray-300">*/}
                    {/*    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="trash"><g id="trash_2"><path fillRule="evenodd" clipRule="evenodd" d="M8.16667 5.83325V4.66659C8.16667 3.37792 9.21134 2.33325 10.5 2.33325H17.5C18.7887 2.33325 19.8333 3.37792 19.8333 4.66658V5.83325H23.3333C23.9777 5.83325 24.5 6.35559 24.5 6.99992C24.5 7.64425 23.9777 8.16658 23.3333 8.16658H22.1667V20.9999C22.1667 22.9329 20.5997 24.4999 18.6667 24.4999H9.33333C7.40034 24.4999 5.83333 22.9329 5.83333 20.9999V8.16658H4.66667C4.02234 8.16658 3.5 7.64425 3.5 6.99992C3.5 6.35559 4.02234 5.83325 4.66667 5.83325H8.16667ZM10.5 4.66659H17.5V5.83325H10.5V4.66659ZM8.16667 8.16658H19.8333V20.9999C19.8333 21.6442 19.311 22.1666 18.6667 22.1666H9.33333C8.689 22.1666 8.16667 21.6442 8.16667 20.9999V8.16658Z" fill="#DC2626"/><path d="M17.5 10.4999H15.1667V19.8333H17.5V10.4999Z" fill="#DC2626"/><path d="M12.8333 10.4999H10.5V19.8333H12.8333V10.4999Z" fill="#DC2626"/></g></g></svg>*/}
                    {/*</button>*/}
                    <button onClick={handleCreate} className="flex-grow hover:opacity-90 p-6 rounded-xl bg-gradient-to-b from-[#f0764b] to-[#d84714] shadow-md shadow-gray-300 text-lg text-white text-center">
                        Save
                    </button>
                </div>
            </div>
            {openTimePicker && (
                <div onClick={()=>setOpenTimePicker(false)} className="fixed inset-0 bg-gray-500/25 z-50 flex items-center justify-center">
                    <div onClick={(e)=> {
                        e.stopPropagation()
                    }} className="w-[400px] h-[450px] bg-white rounded-2xl p-6">
                        <div className='flex items-center justify-center gap-2 mb-5'>
                            <div>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id=" Round / Action / alarm_on">
                                        <path id="&#240;&#159;&#148;&#185;Icon Color" fillRule="evenodd" clipRule="evenodd" d="M19.9203 13.4801L14.0537 19.3734L11.9203 17.2401C11.5337 16.8534 10.8937 16.8534 10.507 17.2401C10.1203 17.6268 10.1203 18.2668 10.507 18.6534L13.3337 21.4801C13.7203 21.8668 14.3603 21.8668 14.747 21.4801L21.3337 14.8934C21.7203 14.5068 21.7203 13.8668 21.3337 13.4801C20.947 13.0934 20.307 13.0934 19.9203 13.4801ZM28.2403 6.68011L24.1337 3.26677C23.5737 2.80011 22.7337 2.86677 22.2537 3.44011C21.787 4.00011 21.867 4.84011 22.427 5.32011L26.5203 8.73344C27.0803 9.20011 27.9203 9.13344 28.4003 8.56011C28.8803 8.00011 28.8003 7.16011 28.2403 6.68011ZM5.467 8.73344L9.56033 5.32011C10.1337 4.84011 10.2137 4.00011 9.73367 3.44011C9.267 2.86677 8.427 2.80011 7.867 3.26677L3.76033 6.68011C3.20033 7.16011 3.12033 8.00011 3.60033 8.56011C4.067 9.13344 4.907 9.20011 5.467 8.73344ZM16.0003 5.33344C9.37367 5.33344 4.00033 10.7068 4.00033 17.3334C4.00033 23.9601 9.37367 29.3334 16.0003 29.3334C22.627 29.3334 28.0003 23.9601 28.0003 17.3334C28.0003 10.7068 22.627 5.33344 16.0003 5.33344ZM16.0003 26.6668C10.8537 26.6668 6.667 22.4801 6.667 17.3334C6.667 12.1868 10.8537 8.00011 16.0003 8.00011C21.147 8.00011 25.3337 12.1868 25.3337 17.3334C25.3337 22.4801 21.147 26.6668 16.0003 26.6668Z" fill="#A8A29E"/>
                                    </g>
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="input_phone"
                                value={newHour}
                                className="focus:border-orange-500 focus:border-opacity-80 block px-6 pb-4 pt-5 w-full text-base bg-transparent rounded-lg border border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                            />
                        </div>
                        <div className='flex items-center justify-center gap-2'>
                            <div>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id=" Round / Action / today">
                                        <path id="&#240;&#159;&#148;&#185;Icon Color" fillRule="evenodd" clipRule="evenodd" d="M25.3333 3.99992H24V2.66659C24 1.93325 23.4 1.33325 22.6667 1.33325C21.9333 1.33325 21.3333 1.93325 21.3333 2.66659V3.99992H10.6667V2.66659C10.6667 1.93325 10.0667 1.33325 9.33333 1.33325C8.6 1.33325 8 1.93325 8 2.66659V3.99992H6.66667C5.18667 3.99992 4.01333 5.19992 4.01333 6.66658L4 25.3333C4 26.7999 5.18667 27.9999 6.66667 27.9999H25.3333C26.8 27.9999 28 26.7999 28 25.3333V6.66658C28 5.19992 26.8 3.99992 25.3333 3.99992ZM24 25.3333H8C7.26667 25.3333 6.66667 24.7333 6.66667 23.9999V10.6666H25.3333V23.9999C25.3333 24.7333 24.7333 25.3333 24 25.3333ZM10.6667 13.3333H14.6667C15.4 13.3333 16 13.9333 16 14.6666V18.6666C16 19.3999 15.4 19.9999 14.6667 19.9999H10.6667C9.93333 19.9999 9.33333 19.3999 9.33333 18.6666V14.6666C9.33333 13.9333 9.93333 13.3333 10.6667 13.3333Z" fill="#A8A29E"/>
                                    </g>
                                </svg>

                            </div>
                            <input
                                type="text"
                                value={newDate}
                                id="input_phone"
                                className="focus:border-orange-500 focus:border-opacity-80 block px-6 pb-4 pt-5 w-full text-base bg-transparent rounded-lg border border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                            />
                        </div>
                        <div className='flex w-full h-[190px] items-center justify-center'>
                            <Timeit onChange={(value) => console.log('value',value)}/>
                        </div>
                        <div className="flex gap-5 mt-4">
                            <button  className="flex items-center p-4 rounded-xl bg-gradient-to-b from-[#fdfdfc] to-[#f6f6f6] shadow-md shadow-gray-300">
                                <svg width="20" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="trash"><g id="trash_2"><path fillRule="evenodd" clipRule="evenodd" d="M8.16667 5.83325V4.66659C8.16667 3.37792 9.21134 2.33325 10.5 2.33325H17.5C18.7887 2.33325 19.8333 3.37792 19.8333 4.66658V5.83325H23.3333C23.9777 5.83325 24.5 6.35559 24.5 6.99992C24.5 7.64425 23.9777 8.16658 23.3333 8.16658H22.1667V20.9999C22.1667 22.9329 20.5997 24.4999 18.6667 24.4999H9.33333C7.40034 24.4999 5.83333 22.9329 5.83333 20.9999V8.16658H4.66667C4.02234 8.16658 3.5 7.64425 3.5 6.99992C3.5 6.35559 4.02234 5.83325 4.66667 5.83325H8.16667ZM10.5 4.66659H17.5V5.83325H10.5V4.66659ZM8.16667 8.16658H19.8333V20.9999C19.8333 21.6442 19.311 22.1666 18.6667 22.1666H9.33333C8.689 22.1666 8.16667 21.6442 8.16667 20.9999V8.16658Z" fill="#DC2626"/><path d="M17.5 10.4999H15.1667V19.8333H17.5V10.4999Z" fill="#DC2626"/><path d="M12.8333 10.4999H10.5V19.8333H12.8333V10.4999Z" fill="#DC2626"/></g></g></svg>
                            </button>
                            <button  className="flex-grow p-4 rounded-xl bg-gradient-to-b from-[#f0764b] to-[#d84714] shadow-md shadow-gray-300 text-lg text-white text-center">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}


            <Toaster />
        </div>
    );
};

export default AddReservation;
