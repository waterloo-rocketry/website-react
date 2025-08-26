import React from 'react';

const SectionHeading = ({ icon: Icon, title, id }) => (
  <div id={id} className="scroll-mt-28">
    <div className="flex items-center gap-3">
      {Icon && <Icon className="h-5 w-5" aria-hidden />}
      <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{title}</h3>
    </div>
  </div>
);

export default SectionHeading;
