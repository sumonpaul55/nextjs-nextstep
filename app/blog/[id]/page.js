import { notFound } from 'next/navigation';
import React from 'react'

function EachBlogPage({ params }) {
    const { id } = params;

    if (id > 2) {
        notFound()//dynamic notfound page call
    }
    return (
        <div>
            <h1 className='text-3xl'>The blog id is {id}</h1>
        </div>
    )
}

export default EachBlogPage