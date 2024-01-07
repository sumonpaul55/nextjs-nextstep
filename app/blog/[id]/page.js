import React from 'react'

function EachBlogPage({ params }) {
    const { id } = params;
    return (
        <div>
            <h1 className='text-3xl'>The blog id is {id}</h1>
        </div>
    )
}

export default EachBlogPage