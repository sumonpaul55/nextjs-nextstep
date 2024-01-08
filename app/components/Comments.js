import React from 'react'

async function Comments({ promise }) {
    const comments = await promise;
    return (
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
    )
}

export default Comments