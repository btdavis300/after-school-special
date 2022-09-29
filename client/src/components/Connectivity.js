import React from 'react'
import UserCard from './UserCard'


function Connectivity({ publicUsers, toAddFriend }) {

    const usersCard = publicUsers.map(user => {
        return <UserCard key={user.id} user={user} toAddFriend={toAddFriend} />
    })

    return (
        <div class='flex flex-col items-center pt-5'>
            <div class='w-3/4'>
                <div className='pb-8 flex flex-col items-end lg:flex lg:flex-row'>
                    <h1 class="text-5xl font-extrabold dark:text-white mr-5">My Connections</h1>
                    <h5 class="text-md italic dark:text-gray-400">Build your community. You are not alone.</h5>
                </div>

                <div class='flex justify-center flex-wrap'>
                    {usersCard}
                </div>
            </div>
        </div>
    )
}

export default Connectivity