// VideoList.tsx
import React from 'react';
import VideoCard from './VideoCard';

interface VideoListProps {
  videoUrls: string[];
}

const VideoList: React.FC<VideoListProps> = ({ videoUrls }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {videoUrls.map((videoUrl, index) => (
        <VideoCard key={index} videoUrl={videoUrl} />
      ))}
    </div>
  );
};

export default VideoList;