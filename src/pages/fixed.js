import './pages.css';
import { useState, useEffect } from 'react';

import littledemon from '../assets/littledemon.mp3';

export const FixedElements = () => {
  const [audioPlaying, setAudioPlaying] = useState(false);

  useEffect(() => {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.loop = true;
  }, []);

  const toggleAudio = () => {
    const audioEl = document.getElementsByClassName("audio-element")[0];

    if (audioPlaying) {
      audioEl.pause();
      setAudioPlaying(false);
    } else {
      audioEl.play();
      setAudioPlaying(true);
    }
  }

  return (
    <div className="fixed">
        <button className="music-control" onClick={toggleAudio}>
          {audioPlaying &&
            (<span>STOP MUSIC</span>)
          }
          {!audioPlaying &&
            (<span>PLAY MUSIC</span>)
          }
        </button>
        <audio className="audio-element">
          <source src={littledemon}></source>
        </audio>
    </div>
  );
}