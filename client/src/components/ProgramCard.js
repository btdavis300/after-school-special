import React, { useState } from 'react'
import { faker } from '@faker-js/faker';

function ProgramCard({ program, loggedIn }) {
    const [contact, setContact] = useState(false)


    function showContacts(e) {
        if (e.target.textContent === "Contact") {
            setContact(true)
        } else {
            setContact(false)
        }
    }

    return (
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

                    {loggedIn ?
                        <div>
                            <h5 className='text-black dark:text-gray-400'>Enroll</h5>
                        </div>
                        :
                        <></>
                    }
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
                            <a href="#" class="mr-4 md:mr-6">{program.agency}</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 md:mr-6 "><span class='text-black dark:text-gray-400'>Phone: </span>{program.contact_number}</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 md:mr-6 "><span class='text-black dark:text-gray-400'>Address: </span>{program.address}, {program.community}, New York, {program.zipcode}</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 md:mr-6">{program.age_group}</a>
                        </li>
                    </ul>

                    :
                    <p class="font-normal text-gray-700 dark:text-gray-400">{faker.lorem.paragraph()}</p>
                }
            </p>
        </div>
    )
}

export default ProgramCard