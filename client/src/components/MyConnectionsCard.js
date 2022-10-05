import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'flowbite-react'

function MyConnectionsCard({ friend, onUnfriend }) {
    const [modal, setModal] = useState(false)
    const [messageModal, setMessageModal] = useState(false)
    const [profPhoto, setProfPhoto] = useState([])
    const [message, setMessage] = useState("")


    function handleUnfriend() {
        onUnfriend(friend)
    }

    useEffect(() => {
        fetch(`/current_user_photos?id=${friend.id}`)
            .then(r => r.json())
            .then(photosArr => {
                setProfPhoto(photosArr)
            })
    }, []);

    function handleMessage() {
        // const message = {
        //     user_id: currentUser.id,
        //     conversation_id: conversation.id,
        //     body: newMessage
        // }

        // fetch('/messages', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(message)
        // })
        //     .then(r => r.json())
        //     .then(data => {
        //         setChatEntries([...chatEntries, data])
        //     })
        console.log(message)
        setModal(false)
    }

    return (
        <>
            <li class="py-3 sm:py-4">
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
                        <button type="button" onClick={() => setMessageModal(true)} class="py-2.5 px-5  mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</button>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <button type="button" onClick={() => setModal(true)} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-1 mb-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Unfriend</button>
                    </div>
                </div>
            </li>
            <React.Fragment>
                <Modal
                    show={modal}
                    size="md"
                    popup={true}
                    onClose={() => setModal(false)}
                >
                    <Modal.Header />
                    <Modal.Body>
                        <div className="text-center">
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                Are you sure you want to unfriend {friend.first_name} {friend.last_name}?
                            </h3>
                            <div className="flex justify-center gap-4">
                                <Button
                                    color="failure"
                                    onClick={() => handleUnfriend(friend)}
                                >
                                    Yes, I'm sure
                                </Button>
                                <Button
                                    color="gray"
                                    onClick={() => setModal(false)}
                                >
                                    No, cancel
                                </Button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </React.Fragment>

            <React.Fragment>

                <Modal
                    show={messageModal}
                    size="md"
                    popup={true}
                    onClose={() => setMessageModal(false)}
                >
                    <Modal.Header />
                    <Modal.Body>
                        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                Message {friend.first_name} {friend.last_name}
                            </h3>
                            <div class="mb-6">
                                <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">New Message</label>
                                <textarea rows="5" cols="60" onChange={(e) => setMessage(e.target.value)} id="large-input" class="h-max overflow-y-auto block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div className="w-full">
                                <Button onClick={handleMessage}>
                                    Send
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                                </Button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        </>
    )
}

export default MyConnectionsCard