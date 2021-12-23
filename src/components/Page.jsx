import { React } from 'react';
import { Helmet } from 'react-helmet';

// A wrapper for page components to allow for changing the title
const Page = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <title>{`${title || ''} - Waterloo Rocketry`}</title>
      </Helmet>
      {children}
    </>
  );
};

export default Page;
