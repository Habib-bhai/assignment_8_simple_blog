import BlogCard from '@/components/blogCard/BlogCard'
import { client } from '@/sanity/lib/client'
import React from 'react'


const query = `
*[_type == "post"] {
  title,
   mainImage,
    author,
    slug,
    categories,
    publishedAt,
    body
}
`

async function GetData() {
    const data = await client.fetch(query)
    return data
}

export default async function BlogPage() {

        const Data = await GetData()
        console.log(Data)


    return (
        <div className='w-screen bg-[#1a202c] flex flex-col justify-center items-center gap-5 py-20'>


            <div className='w-full flex flex-col justify-center items-start '>
                <h1 className='text-white text-5xl font-extrabold'>NEXT.JS</h1>
                <p className='text-white'>Learn more about the React Meta Framework</p>
            </div>

            <div className='grid grid-cols-3 place-items-center place-content-center gap-5'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>

        </div>
    )
}
