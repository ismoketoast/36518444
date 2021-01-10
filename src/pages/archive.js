import './pages.css';

import Parallax from 'react-scroll-parallax/cjs/components/Parallax';

export const ArchivePage = () => {
  return (
    <div className="container archive-page">
      <Parallax x={[50, 0]}>
        <div className="title">
          <p>FULLARCHIVE</p>
        </div>
      </Parallax>
    </div>
  );
}