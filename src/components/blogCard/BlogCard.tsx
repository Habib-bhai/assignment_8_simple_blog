"use client"

import { Clock } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


interface propsType {
  title: string , 
  imageSrc: string, 
  publishingDate: string,
  slug: string,
  categoryTitle: string,
  publishingTime: number,
  excerpt: string
}

export default function BlogCard({title, publishingDate, slug, categoryTitle, publishingTime, excerpt}: propsType) {

 const route = useRouter()
  return (
    
    <div onClick={()=> route.push(`/blog/${slug}`)} className=" w-[320px] md:w-[350px] mx-auto">
      <div className="bg-slate-900 rounded-xl overflow-hidden transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
        {/* Header Section */}
        <div className="bg-blue-600 p-8 flex items-center justify-center">
          <div className="w-32 h-32">
            <Image src={"/Images/next.png"} alt='card image' height={300} width={300}
            className='h-full w-full object-cover'
            unoptimized={true}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col gap-4">
          <div className="flex items-center">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {categoryTitle}
            </span>
          </div>

          <h2 className="text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors">
            {title}
          </h2>

          <p className="text-slate-400 line-clamp-2">
           {excerpt}
          </p>


          {/* Author Section */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
            <div className="flex-shrink-0">
              <Image
                src="/Images/myImg.png"
                alt="author"
                className="w-10 h-10 object-cover rounded-full"
                width={40} height={40}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-medium">Habib Ullah</span>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span>{publishingDate}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{publishingTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

