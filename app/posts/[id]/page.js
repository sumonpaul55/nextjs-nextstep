import Comments from '@/app/components/Comments'
import { metadata } from '@/app/layout'
import { getEachPost } from '@/lib/GetAllPost'
import getAllPostsComments from '@/lib/getPostComment'
import React, { Suspense } from 'react'



export async function generateMetaData({ params }) {
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
    const eachPostPromise = getEachPost(id)
    const eachCommentsPromise = getAllPostsComments(id)

    // const [eachPost, comments] = await Promise.all([eachPostPromise, eachCommentsPromise])
    const eachPost = await eachPostPromise


    return (
        <div className='border p-4'>
            <div className='mb-10'>
                <h2 className='font-bold text-2xl capitalize'>{eachPost.title}</h2>
                <p className='mt-5 text-xl text-slate-600'>{eachPost.body}</p>
            </div>
            <Suspense fallback={`Comments Loading...`}>
                <Comments promise={eachCommentsPromise} />
            </Suspense>
        </div>
    )
}

export default EachPost