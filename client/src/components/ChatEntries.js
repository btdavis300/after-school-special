import React from 'react'

function ChatEntries({ message }) {
    return (
        <div className='p-1'>
            <h1 className='text-xs text-gray-600 dark:text-gray-400'>{message.user_name}</h1>
            <p className='text-black dark:text-white'>{message.body}</p>
        </div>
    )
}

export default ChatEntries