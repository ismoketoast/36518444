import './pages.css';
import harbor from '../assets/harbor.jpeg';
import tower from '../assets/tower.jpeg';
import trlr from '../assets/trlr.jpg';
import thedayof from '../assets/thedayof.jpg';
import tessellate from '../assets/tessellate.jpg';
import c13h20n2o2 from '../assets/c13h20n2o2.jpg';
import crash from '../assets/crash.jpeg';
import crowd from '../assets/crowd.jpeg';

import { Parallax } from 'react-scroll-parallax';
import { VideoFrame } from '.';

export const LandingPage = () => {
  return (
    <div className="container landing-page">
      <div className="title">
        <p>ISMOKETOAST</p>
      </div>
      <div className="search">
      </div>
      <img src={harbor} alt="harbor" width="500" height="400"></img>
      <Parallax y={[-10, 10]} className="tower">
        <img src={tower} alt="tower" width="310" height="410"></img>
      </Parallax>
      <Parallax y={[-20, 20]} className="ismoketoast">
        <p>ISMOKETOAST<br/>ISMOKETOAS<br/>ISMOKETOA<br/>ISMOKETO<br/>ISMOKET</p>
      </Parallax>
      <Parallax y={[-10, 10]} className="ipsum top">
        <p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English<br/> to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It<br/> helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text<br/> by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content<br/> nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's<br/> still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters<br/> K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence<br/> of European languages, as are digraphs not to be found in the original.</p>
      </Parallax>
      <div className="videoshowcase">
        <p>videoshowcase • videoshowcase • videoshowcase • videoshowcase • videoshowcase</p>
      </div>
      <div className="showcase">
        <VideoFrame imgsrc={trlr} title="TRLR 36518444" date="5.8.18" duration="0m30s" margin="0"/>
        <VideoFrame imgsrc={thedayof} title="THE DAY OF" date="6.20.14" duration="2m04s" margin="5"/>
        <VideoFrame imgsrc={tessellate} title="TESSELLATE" date="5.31.14" duration="1m08s" margin="10"/>
        <VideoFrame imgsrc={c13h20n2o2} title="C13H20N2O2" date="4.22.14" duration="0m11s" margin="15"/>
        <VideoFrame imgsrc={trlr} title="TRLR 36518444" date="5.8.18" duration="0m30s" margin="0"/>
        <VideoFrame imgsrc={thedayof} title="THE DAY OF" date="6.20.14" duration="2m04s" margin="5"/>
        <VideoFrame imgsrc={tessellate} title="TESSELLATE" date="5.31.14" duration="1m08s" margin="10"/>
        {/* Have the videos slide up with an animation library */}
      </div>
      <div className="crash">
        <img src={crash} alt="crash" width="550" height="375"></img>
      </div>
      <div class="title ismoketo">
        <Parallax y={[-30, 30]}>
          <p>ISMOKETO</p>
        </Parallax>
      </div>
      <Parallax y={[-70, 70]} className="ipsum bottom">
        <p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and<br/> to emphasise design elements over content. It's also called placeholder (or filler) text. It's a<br/> helps to outline the visual elements of a document or presentation, eg typography, font, or layout.<br/> by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal<br/> nonsensical; it's not genuine, correct, or comprehensible Latin<br/> still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text<br/> K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic</p>
      </Parallax>
      {/* <div className="ist top">
        <Parallax y={[-300, 300]}>
          <p>I</p>
        </Parallax>
        <Parallax>
          <p>S</p>
        </Parallax>
        <Parallax y={[300, -300]}>
          <p>T</p>
        </Parallax>
      </div> */}
      {/* <div className="ist bottom">
        <Parallax y={[-300, 300]}>
          <p>I</p>
        </Parallax>
        <Parallax>
          <p>S</p>
        </Parallax>
        <Parallax y={[300, -300]}>
          <p>T</p>
        </Parallax>
      </div> */}
      <div className="crowd">
        <Parallax y={[-25, 20]}>
          <img src={crowd} alt="crowd" width="325" height="225"></img>
        </Parallax>
      </div>
      {/* On the left hand side have I S T parallax into the right spots over the crash picture */}
      {/* On the left hand side have a rotating 36518444 circle behind some of the assets to bring that side alive more*/}
    </div>
  );
}
