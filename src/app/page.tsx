import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Inter } from "next/font/google"
import { GraduationCap, BookOpen, Users } from 'lucide-react'

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", '600', '700']
})


export default function Home() {
  return (
    <div className="py-20 w-screen bg-[#1a202c]">

      {/* hero section */}


      <div className=" my-20 w-full flex justify-center items-center rounded-xl">
        <div className="py-10 lg:py-0 w-[80%] lg:h-[550px] flex lg:flex-row flex-col justify-center items-center bg-[#2d3748] gap-14 lg:gap-0">

          {/* headings and buttons*/}
          <div className={`${inter.className} flex flex-col text-white justify-center items-start rounded-xl gap-5 text-center lg:text-start px-5 lg:px-0`}>

            <h1 className='md:w-[550px] font-bold text-2xl md:text-4xl'>Learn Next.js in 30 days with great instructors.</h1>

            <p className='md:w-[500px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex assumenda, quas ipsam blanditiis consequuntur odio. Id iste repudiandae in reiciendis facere tempora cupiditate, veritatis corporis quas eligendi magnam quisquam quam.</p>

            <div className='flex gap-8'>
              <Button variant={"secondary"} >Start Learning</Button>
              <Button variant={"destructive"} className='bg-blue-500' >Contact Us</Button>
            </div>

          </div>

          {/* main Image */}
          <div >
            <Image src={"/Images/myImg.png"} alt='my image' height={300} width={500}
              className='hidden lg:block h-[550px] w-[500px] object-cover '
               />
               <StatsSection />
          </div>

        </div>
      </div>


    </div>
  );
}


function StatsSection() {
  return (
    <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
      <div className="grid grid-cols-3 gap-8">
        <Stat icon={BookOpen} value="10+" label="LESSONS" />
        <Stat icon={GraduationCap} value="30+" label="COURSES" />
        <Stat icon={Users} value="15+" label="TUTORS" />
      </div>
    </div>
  )
}


function Stat({ icon: Icon, value, label }: { icon: any; value: string; label: string }) {
  return (
    <div className="text-center space-y-2">
      <div className="flex justify-center">
        <Icon className="w-6 h-6 text-indigo-400" />
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-xs text-slate-400 font-medium tracking-wider">{label}</div>
    </div>
  )
}