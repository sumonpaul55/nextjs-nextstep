import { getEachPost } from '@/lib/GetAllPost'
import React from 'react'



export async function generateMetadata({ params }) {
    const { id } = params
    const post = await getEachPost(id)
    return {
        title: post.title,
        description: post.body
    }
}

async function EachPost({ params }) {
    const { id } = params
    // console.log(id)
    const eachPost = await getEachPost(id)



    return (
        <div className='border p-4'>
            <h2 className='font-bold text-2xl capitalize'>{eachPost.title}</h2>
            <p className='mt-5 text-xl text-slate-600'>{eachPost.body}</p>
        </div>
    )
}

export default EachPost