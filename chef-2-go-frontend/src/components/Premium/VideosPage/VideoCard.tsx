// VideoCard.tsx
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

interface VideoCardProps {
  videoUrl: string;
  title: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoUrl, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const videoId = videoUrl.includes('youtu.be')
    ? videoUrl.split('youtu.be/')[1]
    : videoUrl.split('v=')[1];

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="m-5">
      <div className="bg-gray-100 overflow-hidden rounded-lg shadow-lg group transition-transform transform hover:scale-105">
        <div className="cursor-pointer relative">
          {!isPlaying && (
            <div className="relative">
              <img
                src={thumbnailUrl}
                alt="Video Thumbnail"
                className="object-cover w-full h-48 transition-opacity duration-300 group-hover:opacity-75 rounded-t-lg"
                onClick={handlePlay}
              />
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-75`}>
                <div className="bg-gray-800 text-white hover:bg-gray-700 hover:text-gray-200 transition duration-300 ease-in-out rounded-full p-3 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8"
                    onClick={handlePlay}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 12M6 6l12 6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
          {isPlaying && (
            <ReactPlayer
              url={videoUrl}
              controls={true}
              width="100%"
              height="100%"
              playing={true}
              onEnded={handlePause}
            />
          )}
        </div>
        <div className="p-4">
          <p className="text-xl font-Morion font-semi-bold text-gray-800 mb-2">{title}</p>
          <p className="text-gray-600">{/* Additional video information */}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
