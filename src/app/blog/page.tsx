import BlogCard from '@/components/blogCard/BlogCard'
import React from 'react'

export default function BlogPage() {
  return (
    <div className='w-screen flex flex-col justify-center items-center gap-5 '>

         <h1 className='text-5xl font-extrabold'>NEXT.JS</h1>
         <p>Learn more about the React Meta Framework</p>

         <div className='grid grid-cols-3 place-items-center place-content-center gap-5'>
              <BlogCard/>  
              <BlogCard/>  
              <BlogCard/>  
         </div>

    </div>
  )
}
