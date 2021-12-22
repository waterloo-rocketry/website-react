import React from 'react';

import './Content.css';

const Content = ({ title, children }) => {
  return (
    <div>
      <h1 className="content-title">{title}</h1>
      <p className="content-text">
        {children}
      </p>

    </div>
  );
};

export default Content;
