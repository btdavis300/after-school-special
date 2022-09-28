import React from 'react'
import UserCard from './UserCard'


function Connectivity({ publicUsers }) {

    const usersCard = publicUsers.map(user => {
        return <UserCard key={user.id} user={user} />
    })

    return (
        <div class='flex flex-col items-center'>
            <div class='w-3/4'>
                <h1 class="text-5xl font-extrabold dark:text-white pt-6 pb-6">Connect</h1>

                <div class='flex justify-center flex-wrap'>
                    {usersCard}
                </div>
            </div>
        </div>
    )
}

export default Connectivity