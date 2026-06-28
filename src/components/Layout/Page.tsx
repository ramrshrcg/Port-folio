import {FC, memo, PropsWithChildren} from 'react';
import {Helmet} from 'react-helmet-async';

import {HomepageMeta} from '../../data/dataDef';

const Page: FC<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta content={description} name="description" />
        <link href="/ram.png" rel="icon" sizes="any" />
      </Helmet>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
