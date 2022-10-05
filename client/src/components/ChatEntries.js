import React from 'react'

function ChatEntries({ message }) {
    return (
        <li className='p-1 list-none'>
            <h1 className='text-xs text-gray-600 dark:text-gray-400'>{message.user_name} {message.posted}</h1>
            <p className='text-black dark:text-white'>{message.body}</p>
        </li>
    )
}

export default ChatEntries