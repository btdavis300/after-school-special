import React from 'react'
import { faker } from '@faker-js/faker';

function ProgramCard({ program }) {
    return (
        <div className='w-3/4 pt-4'>

            <p class="block p-6 max-w-3/4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                <ul class="flex flex-wrap justify-start items-center mb-6 text-gray-900 dark:text-white border-b border-slate-500 pb-3">
                    <li>
                        <span href="#" class="mr-4 hover:underline text-gray-900 dark:text-gray-400 hover:cursor-pointer md:mr-6">About</span>
                    </li>
                    <li>
                        <span href="#" class="mr-4 hover:underline text-gray-900 dark:text-gray-400 hover:cursor-pointer md:mr-6">Contact</span>
                    </li>
                </ul>

                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{program.name}</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">{faker.lorem.paragraph()}</p>
            </p>
        </div>
    )
}

export default ProgramCard