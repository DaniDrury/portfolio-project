import { useEffect } from 'react';
import PageContent from '../PageContent';

import { capitalizeFirstLetter } from '../../utils/helpers';
import { Outlet } from 'react-router-dom';

export default function Page({ currentPage }) {
  // save currentPage without the preceeding '/'
  currentPage = currentPage.substring(1);
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage);
  }, [currentPage]);

  return (
    <section>
      <h2>{capitalizeFirstLetter(currentPage)}</h2>
      <PageContent>
        <Outlet />
      </PageContent>
    </section>
  );
}