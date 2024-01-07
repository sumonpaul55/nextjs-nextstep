import Link from 'next/link'
import React from 'react'

function AboutLayout({ children }) {
    return (
        <div>
            <nav>
                <ul className='flex gap-4'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/about/mission">mission</Link></li>
                </ul>
            </nav>
            {children}

        </div>
    )
}

export default AboutLayout