import React from 'react'
import ProgramCard from './ProgramCard'

function MyPrograms({ currentUser, myPrograms }) {

    const programCards = myPrograms.map((program) => {
        return <ProgramCard key={program.id} program={program} />
    })

    return (
        <div class='w-3/4 flex flex-col items-center pt-4 pb-5'>
            <h1 class="text-5xl font-extrabold dark:text-white pb-4">My Programs</h1>
            {programCards}
        </div>
    )
}

export default MyPrograms