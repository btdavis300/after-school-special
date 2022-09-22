import React from 'react'
import ProgramCard from './ProgramCard'

function Programs({ programs }) {

    const programCards = programs.map((program) => {
        return <ProgramCard key={program.id} program={program} />
    })

    return (
        <div>
            <div className='flex items-center flex-col pt-12'>
                {programCards}
            </div>
        </div>
    )
}

export default Programs