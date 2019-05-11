import React from 'react';

const VideoDetail = ({video, entryVideo}) => {
  if (!video) {
    return <div>Loading...</div>;
  }


  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className = "video-detail container">
      <div className = "embed-responsive embed-responsive-16by9">
        <iframe id="fighter-video" className = "embed-responsive-item" src={url} allowFullScreen="allowFullScreen"></iframe>
      </div>
      <div className = "details">
        <div>{video.snippet.title}</div>
        <div className="description">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
