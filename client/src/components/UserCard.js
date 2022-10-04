import React, { useState, useEffect } from 'react'
import { Card, Modal, Button } from 'flowbite-react'

function UserCard({ user, newFriendRequest, newMessage }) {
    const [profPhoto, setProfPhoto] = useState([])
    const [modal, setModal] = useState(false)
    const [requested, setRequested] = useState(false)

    function handleFriend() {
        newFriendRequest(user)
        setRequested(true)
    }

    useEffect(() => {
        fetch(`/current_user_photos?id=${user.id}`)
            .then(r => r.json())
            .then(photosArr => {
                setProfPhoto(photosArr)
            })
    }, []);

    function handleMessage() {
        newMessage(user)
    }


    return (
        <>
            <div class='p-3'>

                <div className="max-w-sm">
                    <Card>
                        <div className="flex justify-end px-4 pt-4">
                        </div>
                        <div className="flex flex-col items-center pb-10">
                            <img
                                className="object-cover mb-3 h-24 w-24 rounded-full shadow-lg"
                                src={profPhoto.image_url}
                                alt="profile"
                            />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                {user.first_name} {user.last_name}
                            </h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                {user.username}
                            </span>
                            <div className="mt-4 flex space-x-3 lg:mt-6">
                                <button
                                    onClick={handleFriend}
                                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    {requested ? "Requested" : "Add Friend"}
                                </button>
                                <button
                                    onClick={() => setModal(true)}
                                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                >
                                    Message
                                </button>
                            </div>
                        </div>
                    </Card>
                </div>

            </div>

            <React.Fragment>

                <Modal
                    show={modal}
                    size="md"
                    popup={true}
                    onClose={() => setModal(false)}
                >
                    <Modal.Header />
                    <Modal.Body>
                        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                Message {user.first_name} {user.last_name}
                            </h3>
                            <div class="mb-6">
                                <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">New Message</label>
                                <textarea rows="5" cols="60" id="large-input" class="h-max overflow-y-auto block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
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

export default UserCard