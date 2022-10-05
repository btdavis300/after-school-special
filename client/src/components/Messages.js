import React, { useState } from 'react'
import MessageSideBarUser from './MessageSideBarUser'
import ChatEntries from './ChatEntries'

function Messages({ currentUser, myFriends }) {
    const [conversation, setConversation] = useState([])
    const [newMessage, setNewMessage] = useState("")
    const [chatEntries, setChatEntries] = useState([])

    const sideBarUser = myFriends.map(friend => {
        return <MessageSideBarUser key={friend.id} friend={friend} setConversation={setConversation} currentUser={currentUser} setChatEntries={setChatEntries} chatEntries={chatEntries} />
    })

    const messageEntries = chatEntries.map(message => {
        return <ChatEntries key={message.id} message={message} />
    })


    function onNewMessage(e) {
        e.preventDefault()
        const message = {
            user_id: currentUser.id,
            conversation_id: conversation.id,
            body: newMessage
        }

        fetch('/messages', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(message)
        })
            .then(r => r.json())
            .then(data => {
                setChatEntries([...chatEntries, data])
            })
    }

    return (
        <>
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

                </div>
                <div>
                    <ul class='block overflow-y-auto w-96 h-96 bg-gray-50 rounded-t-xl lg:rounded-xl dark:bg-gray-800'>
                        {conversation.length === 0 ? <li className='text-3xl font-extrabold list-none text:black dark:text-gray-600 pt-3 flex justify-center'>Start your conversation</li> : messageEntries}
                    </ul>
                </div>
                <form onSubmit={onNewMessage} className='w-96'>
                    <label for="chat" class="sr-only">Your message</label>
                    <div class="flex items-center py-2 px-3 bg-gray-50 rounded-b-lg lg:rounded-lg dark:bg-gray-700">
                        <textarea onChange={(e) => { setNewMessage(e.target.value) }} id="chat" rows="2" class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                        <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                            <svg aria-hidden="true" class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                            <span class="sr-only">Send message</span>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Messages