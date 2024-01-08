import { metadata } from '@/app/layout'
import { getEachPost } from '@/lib/GetAllPost'
import getAllPostsComments from '@/lib/getPostComment'
import React from 'react'



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

    const [eachPost, comments] = await Promise.all([eachPostPromise, eachCommentsPromise])



    return (
        <div className='border p-4'>
            <div className='mb-10'>
                <h2 className='font-bold text-2xl capitalize'>{eachPost.title}</h2>
                <p className='mt-5 text-xl text-slate-600'>{eachPost.body}</p>
            </div>
            <div>
                <h3 className='mt-10 font-semibold text-xl'>Comments</h3>
                {

                    comments?.map((comments, idx) => (
                        <div key={idx} className='my-5'>
                            <h3 className='font-bold'>Name: {comments.name}</h3>
                            <p>{comments.body}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default EachPost