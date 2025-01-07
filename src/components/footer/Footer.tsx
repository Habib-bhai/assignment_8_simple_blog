import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", '600', '700']
})


export default function Footer() {
  return (
    <div className={`${inter.className} w-screen grid sm:grid-cols-1 md:grid-cols-3 grid-rows-5 md:place-items-center place-items-start pl-14 md:pl-0 place-content-center bg-[#2d3748] gap-10 py-5`}>

      <div className='col-span-1 row-span-5 flex flex-col justify-center items-start gap-5'>
        <Image src={"/Images/header/logo-dark.png"} alt='logo' height={30} width={150} className='h-[30px] w-[150px] object-contain ' />

        <p className='text-white flex justify-center items-center gap-3'>
          <Image src={"/Images/copyright.svg"} alt='copyright' height={30} width={30} />
          Bro Habib, All Rights Reserved
        </p>
      </div>

      {/* quick links */}
      <div className='col-span-1 row-span-5 flex flex-col justify-center items-start gap-4 text-white'>

        <h1 className='text-xl font-semibold'> Quick Links</h1>
        <Link href={"/blog/what-is-next-js"}>What is Next.js</Link>
        <Link href={"/contact"}>Contact Us</Link>
        <Link href={"/blog"}>Blog</Link>
      </div>

      {/* Social Media */}
      <div className='col-span-1 row-span-5 flex flex-col justify-center items-start gap-4 text-white'>
        <h1 className='text-xl font-semibold'> Social Medias</h1>
        <p className='flex gap-3'>
          <Link href={"/https://github.com/Habib-bhai"}>
            <Image src={"/Images/github.svg"} alt='github' height={30} width={30} /> github
          </Link>
        </p>
        <p className='flex gap-3'>
          <Link href={"/https://www.linkedin.com/in/habib007ab92282/"}>
            <Image src={"/Images/linkedin.svg"} alt='github' height={20} width={20} />
            linkedin
          </Link>
        </p>
        <p className='flex gap-3'>
          <Link href={"/"}>
            <Image src={"/Images/twitter.svg"} alt='github' height={20} width={20} />
            twitter
          </Link>
        </p>
      </div>

    </div>
  )
}
