// VideosPage.tsx
import VideoList from '../../components/Premium/VideosPage/VideoList';
import React from 'react';
// import NavBar from './NavBar';

const VideosPage: React.FC = () => {
    console.log('Rendering VideosPage');
  const videoUrls = [
    'https://youtu.be/XlKe9MntN30',
    'https://youtu.be/SU_jumjL8qg',
    'https://youtu.be/hrCS2Se0ZcU',
    'https://youtu.be/S_GDu7PcROY',
    'https://youtu.be/XMnYYhIorbA',
    'https://youtu.be/XlKe9MntN30',
    'https://youtu.be/S_GDu7PcROY',
    'https://youtu.be/SU_jumjL8qg',

  ];

  return (
    <div className='bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-200 via-gray-300 to-gray-100'>
      {/* <NavBar /> */}
      {/* <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"> */}

        <div className="text-center pt-2">
        <h1 className="text-4xl font-bold tracking-tight font-Morion text-gray-900 sm:text-6xl">Welcome to Chef2Go <button className='bg-dark-green p-3 rounded-xl text-white hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white hover:font-semibold transition animate-ease-in'>Premium </button>.</h1>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>   
      </div>
      <div className=''>
        Welcome to Cheftogo Premium
      </div>
      <div className="container mx-auto my-8 p-10">
        <VideoList videoUrls={videoUrls}  />
      </div>
   
    </div>
  );
};

export default VideosPage;