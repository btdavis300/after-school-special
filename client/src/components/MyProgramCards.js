import React, { useState } from 'react'
import { Button, Modal } from 'flowbite-react'


function MyProgramCards({ program, onUnenrollment }) {
    const [modal, setModal] = useState(false)
    const [contact, setContact] = useState(false)

    function showContacts(e) {
        if (e.target.textContent === "Contact") {
            setContact(true)
        } else {
            setContact(false)
        }
    }

    function handleUnerollment(program) {
        onUnenrollment(program)
        setModal(false)
    }
    return (
        <div class='flex flex-col items-center'>

            <div className='w-3/4 pt-4'>

                <p class="block p-6 max-w-3/4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className='flex flex-row justify-between border-b border-slate-500'>
                        <div>
                            <ul class="flex flex-wrap justify-start items-center mb-6 text-gray-900 dark:text-white">
                                <li>
                                    <span onClick={showContacts} class="mr-4 hover:underline text-gray-900 dark:text-gray-400 hover:cursor-pointer md:mr-6">About</span>
                                </li>
                                <li>
                                    <span onClick={showContacts} class="mr-4 hover:underline text-gray-900 dark:text-gray-400 hover:cursor-pointer md:mr-6">Contact</span>
                                </li>
                            </ul>
                        </div>

                        <React.Fragment>
                            <Button onClick={() => setModal(true)}>
                                Unenroll
                            </Button>
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
                                            Are you sure you want to unenroll from {program.name}?
                                        </h3>
                                        <div className="flex justify-center gap-4">
                                            <Button
                                                color="failure"
                                                onClick={() => handleUnerollment(program)}
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
                    </div>

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pt-5">{program.name}</h5>

                    {/* Data Info */}
                    <ul class="flex flex-wrap justify-start items-center mb-6 text-gray-900 dark:text-white text-sm">
                        <li>
                            <a href="#" class="mr-4 md:mr-6">{program.program_type}</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 md:mr-6"><span class='text-black dark:text-gray-400'>Community: </span>{program.community}</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 md:mr-6 "><span class='text-black dark:text-gray-400'>Agency: </span>{program.agency}</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 md:mr-6"><span class='text-black dark:text-gray-400'>Age group: </span>{program.age_group}</a>
                        </li>
                    </ul>

                    {contact ?

                        <ul class="flex flex-col items-start mb-6 text-gray-900 dark:text-white text-sm">
                            <li>
                                <a href="#" class="mr-4 md:mr-6 font-bold italic">{program.agency}</a>
                            </li>
                            <li>
                                <a href="#" class="mr-4 md:mr-6 "><span class='text-black dark:text-gray-400'>Phone: </span>{program.contact_number}</a>
                            </li>
                            <li>
                                <a href="#" class="mr-4 md:mr-6 "><span class='text-black dark:text-gray-400'>Address: </span>{program.address}, {program.community}, New York, {program.zipcode}</a>
                            </li>
                        </ul>

                        :
                        <p class="font-normal text-gray-700 dark:text-gray-400">{program.description}</p>
                    }
                </p>
            </div>
        </div>
    )
}

export default MyProgramCards