import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>
        <p className='text-xl mt-20'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora libero cumque distinctio, totam nihil perferendis ipsa dolore minus, deleniti pariatur dolores eligendi provident! Accusantium omnis debitis sed placeat reprehenderit doloribus perferendis, expedita consectetur modi corrupti distinctio et doloremque ut, animi suscipit rem, commodi necessitatibus! Vitae similique culpa totam magni quas?
        </p>

        <br />

        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi ab quisquam eveniet fuga nostrum laboriosam dolor quos aliquam, esse voluptate nisi cum, itaque velit perspiciatis? Cupiditate error placeat incidunt, ea architecto sint quod vitae minus quos obcaecati veritatis autem neque quaerat possimus et nesciunt pariatur itaque soluta fuga. Vel, veritatis?
        </p>
      </div>
    </div>
  )
}

export default About