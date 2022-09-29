import React from 'react'
import MyConnectionsCard from './MyConnectionsCard'

function MyConnections({ myFriends }) {
    console.log(myFriends)

    const friendsCard = myFriends.map(friend => {
        return <MyConnectionsCard key={friend.id} friend={friend} />
    })

    return (
        <div class='flex flex-col pt-4 w-full'>
            <div className='pb-8 flex flex-col items-end lg:flex lg:flex-row'>
                <h1 class="text-5xl font-extrabold dark:text-white mr-5">My Connections</h1>
                <h5 class="text-md italic dark:text-gray-400">Your home base.</h5>
            </div>
            <div className='flex justify-end'>
                <div class="p-4 w-full max-w-lg bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex justify-end items-center mb-4">
                        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Your Friends</h5>
                    </div>
                    <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                            {friendsCard}
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default MyConnections