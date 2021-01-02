import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Page1, LandingPage, ArchivePage } from './pages';

function App() {
  library.add(faSearch);
  return (
    <>
      <LandingPage />
      <ArchivePage />
    </>
  );
}

export default App;
