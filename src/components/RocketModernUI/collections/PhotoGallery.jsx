import React from 'react';

const PhotoGallery = ({ photos }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {photos.map((p) => (
      <div
        key={`photo-${p.src.split('/').pop()}-${p.alt.replace(/\s+/g, '-')}`}
        className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
      >
        <img
          src={p.src}
          alt={p.alt}
          className="h-56 w-full object-cover transition duration-300 ease-out group-hover:scale-105"
        />
      </div>
    ))}
  </div>
);

export default PhotoGallery;
