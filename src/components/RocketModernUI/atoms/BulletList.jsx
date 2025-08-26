import React from 'react';

const BulletList = ({ items = [] }) => (
  <ul className="mt-3 space-y-2">
    {items.map((x) => (
      <li
        key={`bullet-${x.substring(0, 30).replace(/\s+/g, '-')}`}
        className="flex items-start gap-3"
      >
        <div className="flex-shrink-0 mt-1.5">
          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
        </div>
        <p className="text-slate-100 text-sm leading-relaxed font-medium">{x}</p>
      </li>
    ))}
  </ul>
);

export default BulletList;
