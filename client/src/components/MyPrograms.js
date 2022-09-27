import React, { useState } from 'react'
import MyProgramCards from './MyProgramCards'
import { Button, Modal, HiOutlineExclamationCircle } from 'flowbite-react'

function MyPrograms({ currentUser, myPrograms, onUnenrollment }) {
    const [modal, setModal] = useState(false)

    function handleUnerollment(program) {
        onUnenrollment(program)
        setModal(false)
    }

    const programCards = myPrograms.map((program) => {

        return <div class='flex flex-col items-center'>
            {/* <div class='w-3/4 pt-2 flex justify-end'>
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
                                        onClick={() => console.log(program)}
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
            </div> */}

            {/* <div class='w-3/4 pt-2 flex justify-end'>
                <button type="button" onClick={() => handleUnerollment(program)} class="focus:outline-none text-white bg-red-700 
            hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Unenroll</button>
            </div> */}
            <MyProgramCards key={program.id} program={program} onUnenrollment={onUnenrollment} />
        </div>
    })

    return (
        <div class='w-3/4 flex flex-col items-center pt-4 pb-5'>
            <h1 class="text-5xl font-extrabold dark:text-white pb-6">My Programs</h1>
            {programCards}
        </div>
    )
}

export default MyPrograms