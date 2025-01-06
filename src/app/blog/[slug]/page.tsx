import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from '@portabletext/react'
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { PortableTextComponentProps, PortableTextBlock } from '@portabletext/react';



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
    console.log(postData)

    return (

        <>
            <div className="md:hidden mt-16 py-4 text-2xl  font-bold px-5  text-white w-screen bg-PRIMARY flex flex-col justify-center items-center">

                <p className="font-rye mb-1">BLOG</p>
                <p className="font-roboto font-medium text-lg">{postData.title}</p>

            </div>

            <Image src={`${urlFor(postData.mainImage)}`} alt="image" height={1000} width={1000} className="mt-10 md:mt-0 w-screen h-[400px] object-cover" />
            {
                postData ?
                    <div className="mt-5 mb-36  w-screen px-5 md:px-0 flex justify-center items-center flex-col">
                        <div className="md:w-[80%] font-roboto md:border-[1px] md:p-8  border-black flex justify-center items-start md:items-center  flex-col">

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




const myPortableTextComponents = {
    types: {
        image: ({ value }: { value: string }) => <Image src={urlFor(value).url()} alt="image" height={600} width={600} className="w-full md:h-[400px] object-cover mb-5" />,

    },
    block: {

        p: ({ children }: PortableTextComponentProps<PortableTextBlock>) => <p className="  text-xl md:text-2xl w-full text-wrap ">{children}</p>,




    },


}