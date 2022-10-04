import React from 'react'
import MessageSideBarUser from './MessageSideBarUser'

function Messages({ currentUser, myFriends }) {

    const sideBarUser = myFriends.map(friend => {
        return <MessageSideBarUser key={friend.id} friend={friend} />
    })

    return (
        <div className='pt-6 flex lg:flex-row flex-col justify-evenly'>

            <aside class="w-64 pb-5" aria-label="Sidebar">
                <div class="w-56 py-4 px-3 bg-gray-50 rounded-xl dark:bg-gray-800">
                    <div className='border-b border-gray-200 dark:border-gray-700 pb-3'>
                        <h1 className='font-extrabold text-3xl text:black dark:text-gray-400 pt-1'>Chat</h1>
                    </div>
                    <ul class="space-y-2 pt-1">
                        {sideBarUser}
                    </ul>
                </div>
            </aside>
            <div>
                <div class='w-96 h-96 bg-gray-50 rounded-xl dark:bg-gray-800'>
                    <h1 class='dark:text-white'>Hi.</h1>
                    <div className='flex justify-end'>
                        <button type="button" class="py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages