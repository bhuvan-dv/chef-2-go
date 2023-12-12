import React, { useState } from 'react';
import ReactPlayer from 'react-player';

interface VideoCardProps {
  videoUrl: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const videoId = videoUrl.includes('youtu.be')
    ? videoUrl.split('youtu.be/')[1]
    : videoUrl.split('v=')[1];

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="bg-white overflow-hidden rounded-lg shadow-lg">
      <div className="cursor-pointer">
        {!isPlaying && (
          <img
            src={thumbnailUrl}
            alt="Video Thumbnail"
            className="object-cover w-full h-48"
            onClick={handlePlay}
          />
        )}
        {isPlaying && (
          <ReactPlayer
            url={videoUrl}
            controls
            width="100%"
            height="100%"
            playing
            onEnded={() => setIsPlaying(false)}
          />
        )}
      </div>
      <div className="p-4">
        <p className="text-xl font-semibold mb-2">Video Title</p>
        <p className="text-gray-700">{/* Additional video information */}</p>
      </div>
    </div>
  );
};

export default VideoCard;