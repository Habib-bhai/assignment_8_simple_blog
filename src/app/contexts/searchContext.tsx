'use client'

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react'
import { client } from '@/sanity/lib/client'

interface FetchedData {
    title: string,
    mainImage: string,
    author: string,
    slug: { current: string },
    categories: { title: string }
    publishedAt: Date,
    excerpt: string
}

interface SearchContextType {
    searchTerm: string
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    filteredData: FetchedData[]
    setFilteredData: React.Dispatch<React.SetStateAction<FetchedData[]>>
    initialData: FetchedData[]
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export const useSearch = () => {
    const context = useContext(SearchContext)
    if (context === undefined) {
        throw new Error('useSearch must be used within a SearchProvider')
    }
    return context
}

interface SearchProviderProps {
    children: ReactNode
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredData, setFilteredData] = useState<FetchedData[]>([])
    const [initialData, setInitialData] = useState<FetchedData[]>([])

    useEffect(() => {
        const fetchData = async () => {
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
            const data = await client.fetch(query)
            setInitialData(data)
        }

        fetchData()
    }, [])

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

    const value = {
        searchTerm,
        setSearchTerm,
        filteredData,
        setFilteredData,
        initialData
    }

    return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}

