import React from 'react';

interface HomePage {
  title: string;
}

const Page: React.FC<HomePage> = ({
  title,
  children,
}) => {
  return (
    <div>
      <title>{`${title || ''} - Waterloo Rocketry`}</title>
      {children}
    </div>
  );
};

export default Page;
