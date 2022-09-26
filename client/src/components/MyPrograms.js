import React from 'react'
import ProgramCard from './ProgramCard'

function MyPrograms({ currentUser, myPrograms }) {

    const programCards = myPrograms.map((program) => {

        return <div class='flex flex-col items-center'>
            <div class='w-3/4 pt-2 flex justify-end'>
                <button type="button" class="focus:outline-none text-white bg-red-700 
            hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Unenroll</button>
            </div>
            <ProgramCard key={program.id} program={program} />
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