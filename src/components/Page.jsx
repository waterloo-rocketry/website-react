import { React } from 'react';
import { Helmet } from 'react-helmet';

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
