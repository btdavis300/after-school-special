import React from 'react'
import FriendRequestCard from './FriendRequestCard'
import MyConnectionsCard from './MyConnectionsCard'

function MyConnections({ myFriends, onUnfriend, friendRequests, onFriend, toAddFriend, reciprocateFriend }) {

    const friendsCard = myFriends.map(friend => {
        return <MyConnectionsCard key={friend.id} friend={friend} onUnfriend={onUnfriend} />
    })

    const friendRequestsCard = friendRequests.map(request => {
        return <FriendRequestCard key={request.id} friend={request} onFriend={onFriend} toAddFriend={toAddFriend} reciprocateFriend={reciprocateFriend} />
    })



    return (
        <div class='flex flex-col pt-4 w-full'>
            <div className='pb-8 flex flex-col items-end lg:flex lg:flex-row'>
                <h1 class="text-5xl font-extrabold dark:text-white mr-5">My Connections</h1>
                <h5 class="text-md italic dark:text-gray-400">Your home base.</h5>
            </div>
            <div className='flex lg:flex-row lg:justify-between flex-col'>
                <div className='flex justify-end pb-5'>
                    <div class="p-4 w-full max-w-lg bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex justify-start items-center mb-4">
                            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Friend requests</h5>
                        </div>
                        <div class="flow-root">
                            <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                                {friendRequests.length > 0 ? friendRequestsCard : <span className='text-black dark:text-white'>You have no new requests</span>}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <div class="p-4 w-full max-w-lg bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex justify-end items-center mb-4">
                            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Your friends</h5>
                        </div>
                        <div class="flow-root">
                            <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                                {friendsCard}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default MyConnections