"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

import { Inter } from "next/font/google"

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", '600', '700']
})

export default function Header() {
    return (
        <div className='w-screen flex justify-around items-center py-6 px-8 bg-[#2d3748] text-background '>

            <Image src={"/Images/header/logo-dark.png"} alt='logo' height={30} width={150} className='h-[30px] w-[150px] object-contain' />


            {/* serach input */}
            <div className={`${inter.className} font-bold  hidden md:flex justify-center items-center h-[50px] px-5 w-[320px] bg-[#718096] rounded-md  `}>
                <input type="text" className='text-[#cbd5e0] text-xl h-full outline-none bg-transparent' placeholder='Dicover' />
                <Image src={"/Images/header/serach.svg"} alt='search' height={30} width={30} />
            </div>

            {/* navigation  */}
            <div className={`${inter.className} font-bold hidden md:flex justify-center items-center gap-5 text-xl text-white`}>
                <Link href={"/"}>Home</Link>
                <Link href={"/blog"}>Blog</Link>
                <Link href={"/contact"}>Contact</Link>
            </div>




            <Sheet >
                <SheetTrigger className='block md:hidden '>
                    {/*menu  */}
                    <Image src={"/Images/header/hamburger.svg"} alt='menu' height={40} width={40} />
                </SheetTrigger>


                <SheetContent className={`${inter.className} block md:hidden bg-[#2d3748] w-screen`}>
                    <div className={`${inter.className} font-bold  flex flex-col w-full h-full justify-center items-start px-8 gap-5 text-xl text-white`}>
                        <h1 className='text-2xl underline underline-offset-8  text-white'>Main Menu</h1>
                        <Link href={"/"}>Home</Link>
                        <Link href={"/blog"}>Blog</Link>
                        <Link href={"/contact"}>Contact</Link>
                    </div>
                </SheetContent>
            </Sheet>

        </div>
    )
}
