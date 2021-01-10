import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Page1, LandingPage, ArchivePage, FixedElements } from './pages';

function App() {
  library.add(faSearch);
  return (
    <>
      <FixedElements />
      <LandingPage />
      <ArchivePage />
    </>
  );
}

export default App;
