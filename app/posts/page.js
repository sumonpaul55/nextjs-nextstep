import getAllPosts from '@/lib/GetAllPost'
import Link from 'next/link';
import React from 'react'

async function PostsPage() {
    const posts = await getAllPosts();
    return (
        <div className='mt-5'>
            <h1 className='text-3xl font-bold  text-center capitalize'>All posts</h1>
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    posts?.map((post, idx) => (
                        <Link key={idx} href={`/posts/${post.id}`}>
                            <div className='shadow border p-3 rounded-md'>
                                <h3 className='font-semibold mb-3 line-clamp-1'>{post.title}</h3>
                                <p className='line-clamp-4 leading-7'>{post.body}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default PostsPage