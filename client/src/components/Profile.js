import React, { useState } from 'react'
import ProfileCard from './ProfileCard'
import MyPrograms from './MyPrograms'
import MyConnections from './MyConnections'

function Profile({ currentUser }) {
    const [profileCard, setProfileCard] = useState(true)
    const [programComp, setProgramComp] = useState(false)
    const [connectionComp, setConnectionComp] = useState(false)

    function handleClick(e) {
        const state = e.target.name
        if (state === "profileCard") {
            setProfileCard(true)
            setProgramComp(false)
            setConnectionComp(false)
        } else if (state === "programComp") {
            setProfileCard(false)
            setProgramComp(true)
            setConnectionComp(false)
        } else {
            setProfileCard(false)
            setProgramComp(false)
            setConnectionComp(true)
        }
    }

    return (
        <div class='flex items-center flex-col pt-4'>

            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Welcome Back<span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> {currentUser.username}</span></h1>

            {/* Dashboard Tabs */}
            <ul class="flex flex-wrap mb-5 mt-5 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                <li class="mr-2">
                    <a href="#" onClick={handleClick} name="profileCard" aria-current="page" class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Profile</a>
                </li>
                <li class="mr-2">
                    <a href="#" onClick={handleClick} name="programComp" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">My Programs</a>
                </li>
                <li class="mr-2">
                    <a href="#" onClick={handleClick} name="connectionComp" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">My Connections</a>
                </li>
            </ul>

            {programComp ?
                <MyPrograms currentUser={currentUser} />
                : connectionComp ?
                    <MyConnections currentUser={currentUser} />
                    :
                    <ProfileCard currentUser={currentUser} />}


        </div>
    )
}

export default Profile