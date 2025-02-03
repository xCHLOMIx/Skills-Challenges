import React from 'react'

const Skills = ({skill}) => {
  return (
    <div>
        <div className="bg-white px-2 text-[0.7rem] py-1 border border-primary flex justify-center rounded-md text-primary capitalize">
            {skill}
        </div>
    </div>
  )
}

export default Skills