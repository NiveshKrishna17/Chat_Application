import React, { Fragment, useEffect, useState } from 'react'
import io from 'socket.io-client';

const socket = io.connect("http://localhost:3203");

export default function Chat() {
    const [room, setRoom] = useState('');
    const [message, setMessageData] = useState('');
    const [receiveMessage, setReceiveMessage] = useState('');

    const sendMessage = () => {
        socket.emit('send_message', { message, room });
    }

    const joinRoom = () => {
        if (room !== '') {
            socket.emit('join_room', room);
        }
    }

    useEffect(() => {
        socket.on('receive_message', (data) => {
            setReceiveMessage(data.message);
        })
    }, [socket]);

    return (
        <Fragment>
            <div className="flex flex-col items-center justify-center h-screen">
                <input
                    placeholder="Room"
                    onChange={(e) => setRoom(e.target.value)}
                    className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-80"
                />
                <button onClick={joinRoom} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4">
                    Join a Room
                </button>
                <input
                    placeholder="Message ..."
                    onChange={(e) => setMessageData(e.target.value)}
                    className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-80"
                />
                <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4">
                    Send
                </button>
                <h1 className="text-xl font-semibold">Messages: {receiveMessage}</h1>
            </div>
        </Fragment>
    )
}
