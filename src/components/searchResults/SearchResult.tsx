'use client'

import React from 'react'
import { useSearch } from '@/app/contexts/searchContext' 
import BlogCard from '../blogCard/BlogCard'
import { urlFor } from '@/sanity/lib/image'

export default function SearchResults() {
    const { searchTerm, filteredData } = useSearch()

    if (searchTerm === '') {
        return null
    }

    return (
        <div className='bg-[#1a202c] w-full  mx-auto mt-8'>
            {filteredData.length > 0 ? (
                <div className='bg-[#1a202c] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center gap-10 md:gap-5'>
                    {filteredData.map((item: any) => (
                        <BlogCard
                            title={item.title}
                            imageSrc={urlFor(item.mainImage).url()}
                            publishingDate={new Date(item.publishedAt).toLocaleDateString()}
                            categoryTitle={item.categories?.title ? item.categories.title : ""}
                            slug={item.slug.current}
                            key={item.slug.current}
                            publishingTime={new Date(item.publishedAt).getHours()}
                            excerpt={item?.excerpt}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-center text-white">No results found.</p>
            )}
        </div>
    )
}

