import React, { Fragment } from 'react'

export default function Hero() {
    return (
        <Fragment>
            <div className="bg-gray-900 text-white py-20">
                <div className="container mx-auto flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Chat Application</h1>
                    <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <img src="https://via.placeholder.com/800x400" alt="Dummy" className="rounded-lg shadow-lg" />
                </div>
            </div>
        </Fragment>
    )
}
