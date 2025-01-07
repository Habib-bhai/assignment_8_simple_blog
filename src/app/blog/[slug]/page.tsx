import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from '@portabletext/react'
import Image from "next/image";
import React from "react";
import { PortableTextComponentProps, PortableTextBlock, PortableTextMarkComponentProps  } from '@portabletext/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'



const getPosts = async (slug: string) => {
    const query = `*[_type == "post" && slug.current == "${slug}"] {
    title,
    mainImage,
    author,
    slug,
    categories,
    publishedAt,
    body
}[0]`;

    const data = await client.fetch(query);

    return data

}

export const revalidate = 10;


export default async function BlogPostPage({ params }: { params: { slug: string } }) {

    const postData = await getPosts(params.slug)
    // console.log(postData)

    return (

        <>
            <div className="bg-[#1a202c] md:hidden mt-16 py-4 text-2xl  font-bold px-5  text-white w-screen bg-PRIMARY flex flex-col justify-center items-center">

                <p className="font-rye mb-1">BLOG</p>
                <p className="font-roboto font-medium text-lg">{postData.title}</p>

            </div>

            <Image src={`${urlFor(postData.mainImage)}`} alt="image" height={1000} width={1000} className="mt-10 md:mt-0 w-screen h-[400px] object-cover" />
            {
                postData ?
                    <div className="bg-[#1a202c] text-white pb-36  w-screen px-5 md:px-0 flex justify-center items-center flex-col">
                        <div className="md:w-[80%] font-roboto md:border-[1px] md:p-8  border-white flex justify-center items-start md:items-center  flex-col">

                            <h1 className="md:text-5xl ">{postData.title}</h1>


                            <div className={` ${richTextStyles}`}>
                                {/* body */}
                                <PortableText
                                    value={postData.body}
                                    components={myPortableTextComponents}
                                />

                            </div>


                        </div>
                    </div> :
                    <h1>not found</h1>
            }




        </>
    )
}



const richTextStyles = `
mt-14
md:max-w-3xl


prose-headings:my-5
prose-headings:font-bold
prose-heading:text-3xl
prose-heading:font-rye

prose-p:my-10

prose-li:list-disc
list-disc
prose-li:leading-7
prose-li:ml-4
`;




interface CodeBlock {
    language: string
    code: string
    filename?: string
  }
  
   const myPortableTextComponents = {
    types: {
      image: ({ value }: { value: {alt: string} }) => (
        <Image 
          src={urlFor(value).url()} 
          alt={value.alt || ''} 
          height={600} 
          width={600} 
          className="w-full md:h-[400px] object-cover mb-5" 
        />
      ),
      codeBlock: ({ value }: { value: CodeBlock }) => (
        <div className="my-6">
          {value.filename && (
            <div className="bg-gray-800 text-gray-200 px-4 py-2 text-sm rounded-t-lg">
              {value.filename}
            </div>
          )}
          <SyntaxHighlighter
            language={value.language || 'text'}
            style={oneDark}
            className="rounded-lg !mt-0"
            customStyle={{
              margin: value.filename ? '0' : '1.5rem 0',
              borderTopLeftRadius: value.filename ? '0' : '0.5rem',
              borderTopRightRadius: value.filename ? '0' : '0.5rem',
            }}
          >
            {value.code}
          </SyntaxHighlighter>
        </div>
      ),
    },
    block: {
      h1: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
        <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-4">{children}</h1>
      ),
      h2: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
        <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-3">{children}</h2>
      ),
      h3: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
        <h3 className="text-2xl md:text-3xl font-bold mt-4 mb-2">{children}</h3>
      ),
      normal: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
        <p className="text-xl md:text-2xl w-full text-wrap mb-4">{children}</p>
      ),
      blockquote: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
        <blockquote className="border-l-4 border-gray-300 pl-4 my-4 italic">
          {children}
        </blockquote>
      ),
    },
    marks: {
      code: ({ children }: PortableTextMarkComponentProps<any> /* eslint-disable-line @typescript-eslint/no-explicit-any */) => (
        <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 font-mono text-sm">
          {children}
        </code>
      ),
      link: ({ value, children }: PortableTextMarkComponentProps<any>/* eslint-disable-line @typescript-eslint/no-explicit-any */) => {
        const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
        return (
          <a 
            href={value?.href} 
            target={target} 
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            className="text-blue-500 hover:text-blue-600 underline"
          >
            {children}
          </a>
        )
      },
    },
  }