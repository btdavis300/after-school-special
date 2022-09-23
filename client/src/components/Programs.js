import React, { useState, useEffect } from 'react'
import ProgramCard from './ProgramCard'
import { Dropdown } from 'flowbite-react'

function Programs({ programs, setPrograms, loggedIn, currentUser }) {
    const [enrolledList, setEnrolledList] = useState()



    const programCards = programs.map((program) => {
        return <ProgramCard key={program.id} program={program} loggedIn={loggedIn} currentUser={currentUser} />
    })

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

    function fetchCategory(cat) {
        fetch(`/${cat}`)
            .then(r => r.json())
            .then(data => setPrograms(data))
    }

    return (
        <div className='flex items-center flex-col'>
            <div className='w-3/4 pt-12'>
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