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

// import React from 'react';

// interface HomePage {
//   title: string;
// }

// const Page: React.FC<HomePage> = ({
//   title,
//   children,
// }) => {
//   return (
//     <div>
//       <title>{`${title || ''} - Waterloo Rocketry`}</title>
//       {children}
//     </div>
//   );
// };

// export default Page;
