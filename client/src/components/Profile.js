import React from 'react'
import ProfileCard from './ProfileCard'

function Profile() {
    return (
        <div class='flex items-center flex-col pt-4'>

            {/* Dashboard Tabs */}
            <ul class="flex flex-wrap mb-5 mt-5 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                <li class="mr-2">
                    <a href="./profile" aria-current="page" class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Profile</a>
                </li>
                <li class="mr-2">
                    <a href="./my_programs" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">My Programs</a>
                </li>
                <li class="mr-2">
                    <a href="./my_connections" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">My Connections</a>
                </li>
            </ul>

            <ProfileCard />

        </div>
    )
}

export default Profile