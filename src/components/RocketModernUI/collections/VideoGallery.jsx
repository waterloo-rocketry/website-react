import React from 'react';

const VideoGallery = ({ videos }) => (
  <div id="videos" className="grid lg:grid-cols-2 gap-6">
    {videos.map((v) => (
      <div
        key={`video-${v.url.split('/').pop()}-${v.title.replace(/\s+/g, '-')}`}
        className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
      >
        <div className="aspect-video">
          <iframe
            className="h-full w-full"
            src={v.url}
            title={v.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="p-3 text-sm opacity-80">{v.title}</div>
      </div>
    ))}
  </div>
);

export default VideoGallery;
