import React from 'react';

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
