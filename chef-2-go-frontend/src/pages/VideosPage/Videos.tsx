// VideosPage.tsx
import VideoList from '../../components/Premium/VideosPage/VideoList';
import React from 'react';
// import NavBar from './NavBar';

const VideosPage: React.FC = () => {
    console.log('Rendering VideosPage');
  const videoUrls = [
    'https://youtu.be/IEfQ7kyXEYU',
    'https://youtu.be/DVe-yAE3nAE',
    'https://youtu.be/onQ9KGWysQY?si=NxJXrsxtICpY3v1F',
    'https://youtu.be/yJnKIEogUbM?si=c5wCcuE_OGZsSS1-',
    'https://youtu.be/9WYFcz74Y-M?si=pSJOLAX2r927mMtA',
    'https://youtu.be/yJnKIEogUbM?si=c5wCcuE_OGZsSS1-',
    'https://youtu.be/yJnKIEogUbM?si=c5wCcuE_OGZsSS1-',
    'https://youtu.be/yJnKIEogUbM?si=c5wCcuE_OGZsSS1-',

  ];

  return (
    <div>
      {/* <NavBar /> */}
      <div className="container mx-auto my-8">
        <VideoList videoUrls={videoUrls} />
      </div>
    </div>
  );
};

export default VideosPage;