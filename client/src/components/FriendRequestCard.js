import React, { useState, useEffect } from 'react'

function FriendRequestCard({ friend, onFriend, toAddFriend, reciprocateFriend }) {
    const [profPhoto, setProfPhoto] = useState([])

    function handleAccept() {
        onFriend(friend)
        toAddFriend(friend)
        reciprocateFriend(friend)
    }

    function handleDecline() {
        onFriend(friend)
    }

    useEffect(() => {
        fetch(`/current_user_photos?id=${friend.id}`)
            .then(r => r.json())
            .then(photosArr => {
                setProfPhoto(photosArr)
            })
    }, []);

    return (
        <>
            <li class="py-3 sm:py-4 text-black dark:text-white">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="object-cover w-8 h-8 rounded-full" src={profPhoto.image_url} alt="profile" />
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {friend.first_name} {friend.last_name}
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            {friend.username}
                        </p>
                    </div>

                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <button type="button" onClick={handleAccept} class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-1 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900">Accept</button>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <button type="button" onClick={handleDecline} class="focus:outline-none text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-1 mb-1 dark:bg-blue-500 dark:hover:bg-blue-500 dark:focus:ring-blue-900">Decline</button>
                    </div>
                </div>
            </li>
        </>
    )
}

export default FriendRequestCard