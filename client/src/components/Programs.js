import React, { useState } from 'react'
import ProgramCard from './ProgramCard'
import { Dropdown } from 'flowbite-react'

function Programs({ programs, loggedIn, currentUser, onEnroll, fetchCategory }) {
    const [hideAlert, setHideAlert] = useState("hidden")

    const programCards = programs.map((program) => {
        return <ProgramCard key={program.id} program={program} loggedIn={loggedIn} currentUser={currentUser} onEnroll={onEnroll} setHideAlert={setHideAlert} />
    })

    function handleAlert() {
        setHideAlert("hidden")
    }

    function handleCategory(e) {
        if (e.target.textContent.includes("-")) {
            let category = e.target.textContent.toLowerCase().replace("-", " ").replace(" ", "_").replace(" ", "_").replace(" ", "_")
            fetchCategory(category)
        } else if (e.target.textContent === "Out of School Time") {
            let category = "out_of_school_time"
            fetchCategory(category)
        } else {
            let category = e.target.textContent.toLowerCase().replace(" ", "_").replace(" ", "_")
            fetchCategory(category)
        }
    }

    return (
        <div className='flex items-center flex-col'>
            <div className='w-3/4 pt-12'>
                <div className={hideAlert}>
                    <div id="alert-3" class="fixed top-0 flex p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200" role="alert">
                        <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-green-700 dark:text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Info</span>
                        <div class="ml-3 text-sm font-medium text-green-700 dark:text-green-800">
                            You have been enrolled!
                        </div>
                        <button onClick={handleAlert} type="button" class="ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300" data-dismiss-target="#alert-3" aria-label="Close">
                            <span class="sr-only">Close</span>
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>
                <Dropdown
                    label="Categories"
                    placement="right-start"
                >
                    <Dropdown.Item onClick={handleCategory}>
                        Crisis Shelter
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleCategory}>
                        Drop-In Center
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleCategory}>
                        Out of School Time
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleCategory}>
                        Street Outreach
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleCategory}>
                        Transportation
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleCategory}>
                        Transitional Independent Living
                    </Dropdown.Item>
                </Dropdown>
            </div>
            <div className='flex items-center flex-col pt-1'>
                {programCards}
            </div>
        </div>
    )
}

export default Programs