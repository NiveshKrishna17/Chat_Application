import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <Fragment>
            <header className="text-black p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-lg font-semibold">Chat Application</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><Link to='/chat' className="hover:text-gray-300">Chat</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </Fragment>
    )
}
