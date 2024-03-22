import React from 'react';
import ReactProject from '../assets/portfolio/reactRouterProject.png'
import vueRouterProject from '../assets/portfolio/vueRouterProject.png'
import vueWeatherApp from '../assets/portfolio/vueWeatherApp.png'

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: ReactProject,
      hrefCode: 'https://github.com/anshul-sharma-in/react-projects',
      hrefDemo: 'http://react-firstproject.s3-website-ap-southeast-2.amazonaws.com/'
    },
    {
      id: 2,
      src: vueRouterProject,
      hrefCode: 'https://github.com/anshul-sharma-in/vue-router-project',
      hrefDemo: 'http://vue-routerproject.s3-website-ap-southeast-2.amazonaws.com/#/'
    },
    {
      id: 3,
      src: vueWeatherApp,
      hrefCode: 'https://github.com/anshul-sharma-in/vue-weather-app',
      hrefDemo: 'http://vue-weatherapp.s3-website-ap-southeast-2.amazonaws.com/'
    }
  ];


  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </p>
          <p className='py-6'>
            Check out some of my work right here
          </p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src, hrefCode, hrefDemo }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 h-48' />
              <div className='flex items-center justify-center'>
                <a 
                  href={hrefDemo} 
                  target='_blank'
                  rel='noreferrer' 
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-150'>Demo</a>
                <a 
                  href={hrefCode} 
                  target='_blank'
                  rel='noreferrer' 
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-150'>Code</a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Portfolio