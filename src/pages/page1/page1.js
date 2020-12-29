import logo from './logo.svg';
import './page1.css';

import { Parallax } from 'react-scroll-parallax';

export const Page1 = () => {
  return (
    <div className="App">
    <div className="page-1">
      <Parallax y={[-200, 200]} className="image-1">
        <img src={logo} className="App-logo" alt="logo" />
      </Parallax>
      <Parallax y={[-20, 20]} className="image-2">
        <img src={logo} className="App-logo" alt="logo" />
      </Parallax>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  </div>
  );
}
