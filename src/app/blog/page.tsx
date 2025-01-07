import BlogCard from '@/components/blogCard/BlogCard'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import React from 'react'



interface fetchedData {
    title: string,
    mainImage: string,
    author: string,
    slug: { current: string },
    categories: { title: string }
    publishedAt: Date,
    excerpt: string

}
 
const query = `
*[_type == "post"] {
  title,
   mainImage,
    author,
    slug,
    excerpt,
 "categories": categories[]-> {
    title,
 },
    publishedAt,
}
`


export const revalidate = 60

async function GetData() {
    const data = await client.fetch(query)
    return data
}

export default async function BlogPage() {

    const Data: fetchedData[] = await GetData()



    return (
        <div className='w-screen bg-[#1a202c] flex flex-col justify-center items-center gap-5 py-20'>

            <div className='w-full flex flex-col justify-center items-center mb-20'>
                <div className='flex flex-col justify-center items-start gap-4'>
                    <h1 className='text-white text-5xl font-extrabold'>NEXT.JS</h1>
                    <p className='text-white'>Learn more about the React Meta Framework</p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center gap-10 md:gap-5'>
                {
                    Data.map((item: fetchedData) => (<BlogCard title={item.title} imageSrc={urlFor(item.mainImage).url()} publishingDate={new Date(item.publishedAt).toLocaleDateString()}
                        categoryTitle={item.categories?.title ? item.categories.title : ""}
                        slug={item.slug.current} key={item.slug.current}
                        publishingTime={new Date(item.publishedAt).getHours()}
                        excerpt={item?.excerpt}
                    />))
                }

            </div>

        </div>
    )
}
