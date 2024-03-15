import React from 'react';
import html5Icon from '../assets/html5Icon.png';
import cssIcon from '../assets/cssIcon.png';
import javascriptIcon from '../assets/javascriptIcon.png';
import javaIcon from '../assets/javaIcon.png';
import reactIcon from '../assets/reactIcon.png';
import vueIcon from '../assets/vueIcon.png';
import angularIcon from '../assets/angularIcon.png';
import dotnetIcon from '../assets/dotnetIcon.png';

const Experience = () => {

  const techs = [
    {
      id: 1,
      src: html5Icon,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: cssIcon,
      title: 'CSS',
      style: 'shadow-blue-400'
    },
    {
      id: 3,
      src: javascriptIcon,
      title: 'Javascript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: reactIcon,
      title: 'React',
      style: 'shadow-blue-600'
    },
    {
      id: 5,
      src: vueIcon,
      title: 'Vue',
      style: 'shadow-blue-200'
    },
    {
      id: 6,
      src: angularIcon,
      title: 'Angular',
      style: 'shadow-red-500'
    },
    {
      id: 7,
      src: javaIcon,
      title: 'Java',
      style: 'shadow-gray-400'
    },
    {
      id: 8,
      src: dotnetIcon,
      title: 'Dotnet',
      style: 'shadow-pink-400'
    }
  ]

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6'>These are technology I have worked on</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className='w-20 mx-auto' />
              <p className='mt-4'>{title}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Experience