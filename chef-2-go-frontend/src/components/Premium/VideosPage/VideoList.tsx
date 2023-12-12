// VideoList.tsx
import React from 'react';
import VideoCard from './VideoCard';

interface VideoListProps {
  videos: { videoUrl: string; title: string }[];
}

const VideoList: React.FC<VideoListProps> = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video, index) => (
        <VideoCard key={index} videoUrl={video.videoUrl} title={video.title} />
      ))}
    </div>
  );
};

export default VideoList;
