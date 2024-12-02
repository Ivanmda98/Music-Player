import { useRef, useState, useEffect } from 'react';
import './song-card-component.css';
import songCardHook from './song-card-hook';

function SongCardComponent() {
    const path = '../public/songs/';
    const songsList =[
        `${path}forest-lullaby-110624.mp3`,
        `${path}lost-in-city-lights-145038.mp3`,
        `${path}forest-lullaby-110624.mp3`,
        `${path}lost-in-city-lights-145038.mp3`
    ];
    const {
        play,
        nextSong,
        previousSong,
        songOnTimeUpdate,
        isPlaying,
        currentIndex,
        songDuration,
        currentTime,
        progress,
        audioRef
    } = songCardHook(songsList);

    

    return (
      <>
       <div className="container-card-song">
        <div className="container-image-song">
            <img src="../public/images/cover-1.png" alt="song-image" />
        </div>
        <div className="container-info-song">
            <h3 className="song-name">Lost it all</h3>
            <p className="author-song">Lost in lona</p>
        </div>
        <div className="container-options-songs">
            <div className="container-progress-bar-time">
                <div className='container-times'>
                    <div className='timer' id='current-time'>{`${currentTime.minutes}:${currentTime.seconds}`}</div>
                    <div className='timer' id='end-time'>{`${songDuration.minutes}:${songDuration.seconds}`}</div>
                </div>
                <div className="container-progress-bar">
                    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                    <audio 
                        src={`${songsList[currentIndex]}`} 
                        ref={audioRef}
                        onTimeUpdate={songOnTimeUpdate}
                    ></audio>
                </div>
            </div>
            <div className="container-options-multimedia">
                <div id='option-previous-song' onClick={previousSong}>
                    <img src="../public/images/Stop_and_play_fill-1.svg" alt="" />
                </div>
                <div id='option-play' onClick={play}>
                    <img 
                    id={isPlaying? 'pause': 'play'}
                    src={isPlaying? "./public/images/Pause_fill.svg"
                        : "./public/images/Play_fill.svg"
                    } alt="" />
                </div>
                <div id = 'option-next-song' onClick={nextSong}>
                    <img src="../public/images/Stop_and_Play_fill.svg" alt="" />
                </div>
            </div>
        </div>
       </div>
      </>
    )
  }
  
  export default SongCardComponent
  