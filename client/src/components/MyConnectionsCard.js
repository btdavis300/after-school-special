import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'flowbite-react'

function MyConnectionsCard({ friend, onUnfriend }) {
    const [modal, setModal] = useState(false)
    const [profPhoto, setProfPhoto] = useState([])

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
                        <button type="button" class="py-2.5 px-5  mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</button>
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
        </>
    )
}

export default MyConnectionsCard