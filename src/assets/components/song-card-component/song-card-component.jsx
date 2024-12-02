import { useRef, useState, useEffect } from 'react';
import './song-card-component.css';
import songCardHook from './song-card-hook';

function SongCardComponent() {
    const cardsList = [
        {
            song: '../public/songs/forest-lullaby-110624.mp3',
            imageSong: '../public/images/cover-1.png',
            titleSong: 'Forest Lullaby',
            author: 'Cosmo Sheldrake'
        },
        {
            song: '../public/songs/lost-in-city-lights-145038.mp3',
            imageSong: '../public/images/cover-2.png',
            titleSong: 'Lost in the City Lights',
            author: 'Lesfm'
        }
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
    } = songCardHook(cardsList);

    return (
      <>
       <div className="container-card-song">
        <div className="container-image-song">
            <img src={cardsList[currentIndex].imageSong} alt="song-image" />
        </div>
        <div className="container-info-song">
            <h3 className="song-name">{cardsList[currentIndex].titleSong}</h3>
            <p className="author-song">{cardsList[currentIndex].author}</p>
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
                        src={`${cardsList[currentIndex].song}`} 
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
  