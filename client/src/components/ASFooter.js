import React, { useState } from 'react'
import icon from "../assets/as-icon.png"
import { Modal } from "flowbite-react"

function ASFooter() {
    const [modal, setModal] = useState(false)

    return (
        <>

            <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                        <img src={icon} class="mr-3 h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Afterschool Special</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" onClick={() => setModal(true)} class="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/brennantdavis/" target="_blank" class="mr-4 hover:underline md:mr-6">LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://github.com/btdavis300" target="_blank" class="mr-4 hover:underline md:mr-6 ">Github</a>
                        </li>
                        <li>
                            <a href="mailto: brennantd@gmail.com" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    Tools used: React, Ruby on Rails, BCrypt, Active Storage, Tailwind, Flowbite, Flowbite-React. Deployed on Heroku.
                    <div>
                        <a href="https://github.com/btdavis300/after-school-special" target="_blank" class="hover:underline">Click for Github Repo.</a>
                    </div>
                </span>
            </footer>

            <React.Fragment>
                <div className="flex flex-wrap gap-4">
                </div>
                <Modal
                    show={modal}
                    size="3xl"
                    position="top-center"
                    onClose={() => setModal(false)}
                >
                    <Modal.Header>
                        About Afterschool Special <span className='text-sm text-white dark:text-gray-400'>- React, Ruby on Rails, BCrypt, Active Storage, Tailwind, Flowbite, Flowbite-React.</span>
                        <div>
                            <a href="https://github.com/btdavis300/after-school-special" target="_blank" className='text-sm text-blue-300 hover:underline'>Github Repo.</a>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6 p-6">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                Afterschool Special was made as part of my capstone project for my Flatiron School for Software Engineering Certification. This project was made over a 3 week period. AS is intended for parents to find the right afterschool program for their child and to build a stronger community through parent connections.
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                During my study at Flatiron, I came across a website called <a href="https://opendata.cityofnewyork.us/" className='text-blue-300 hover:underline' target="_blank">NYC Open Data</a> that contained a plethora of data sets for the city of New York. I was fascinated by this data, particulary the API that held information about afterschool programs. As I was brainstorming ideas for my final project, my wife (a social worker) showed me the online resources she uses for her job, resources for food banks, housing assistances, cash assistances, etc. I wanted to create something practical for people to use, not just a web application that could display data, but could also be interactive between users. Afterschool Special is styled by Tailwind with responsive design to be used for mobile devices.
                            </p>
                        </div>
                    </Modal.Body>
                </Modal>
            </React.Fragment>

        </>
    )
}

export default ASFooter