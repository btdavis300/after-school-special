import React, { useState, useEffect } from 'react'

function MessageSideBarUser({ friend, setConversation, conversation, currentUser, setChatEntries }) {
    const [profPhoto, setProfPhoto] = useState([])

    useEffect(() => {
        fetch(`/current_user_photos?id=${friend.id}`)
            .then(r => r.json())
            .then(photosArr => {
                setProfPhoto(photosArr)
            })
    }, []);

    function handleConversation() {
        fetch(`/current_user_messages?writer_id=${currentUser.id}&reader_id=${friend.id}`)
            .then(r => r.json())
            .then(convoArr => {
                setConversation(convoArr)
                setChatEntries(convoArr.messages)

            })
    }

    return (
        <div onClick={handleConversation}><li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <img class="object-cover w-8 h-8 rounded-full" src={profPhoto.image_url} alt="profile" />
                <span class="ml-3">{friend.first_name} {friend.last_name}</span>
            </a>
        </li></div>
    )
}

export default MessageSideBarUser