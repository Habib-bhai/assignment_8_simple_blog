'use client'

import React, { useState, useEffect } from 'react'
import BlogCard from '../blogCard/BlogCard' 
import { urlFor } from '@/sanity/lib/image'

interface SearchBarProps {
    initialData: fetchedData[]
}

interface fetchedData {
    title: string,
    mainImage: string,
    author: string,
    slug: { current: string },
    categories: { title: string }
    publishedAt: Date,
    excerpt: string
}

export default function SearchBar({ initialData }: SearchBarProps) {
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredData, setFilteredData] = useState<fetchedData[]>([])

    useEffect(() => {
        if (searchTerm === '') {
            setFilteredData([])
        } else {
            const filtered = initialData.filter(item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setFilteredData(filtered)
        }
    }, [searchTerm, initialData])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    const handleSearch = () => {
        // This function is now optional, as filtering happens in real-time
        // But we keep it in case you want to add any additional functionality on button click
        console.log("Search button clicked")
    }

    return (
        <div className='w-full max-w-4xl mx-auto'>
            <div className='flex justify-center items-center mb-8'>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder="Search blogs..."
                    className='w-full max-w-md px-4 py-2 text-gray-700 bg-white border rounded-l-md focus:outline-none focus:border-blue-500'
                />
                <button
                    onClick={handleSearch}
                    className='px-4 py-2 text-white bg-blue-500 rounded-r-md hover:bg-blue-600 focus:outline-none'
                >
                    Search
                </button>
            </div>

            {searchTerm !== '' && (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center gap-10 md:gap-5'>
                    {filteredData.map((item: fetchedData) => (
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
            )}

            {searchTerm !== '' && filteredData.length === 0 && (
                <p className="text-center text-white">No results found.</p>
            )}
        </div>
    )
}

