import './song-card-component.css';
import songCardHook from './song-card-hook';

function SongCardComponent() {
    const {play, isPlaying, nextSong, previousSong} = songCardHook();

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
                    <div className='timer' id='current-time'>02:33</div>
                    <div className='timer' id='end-time'>04:00</div>
                </div>
                <div className="container-progress-bar">
                    <div className="progress-bar"></div>
                </div>
            </div>
            <div className="container-options-multimedia">
                <div id='option-previous-song' onClick={() => {previousSong}}>
                    <img src="../public/images/Stop_and_play_fill-1.svg" alt="" />
                </div>
                <div id='option-play' onClick={play}>
                    <img 
                    id={isPlaying? 'pause': 'play'}
                    src={isPlaying? "./public/images/Pause_fill.svg"
                        : "./public/images/Play_fill.svg"
                    } alt="" />
                </div>
                <div id = 'option-next-song' onClick={() => nextSong()}>
                    <img src="../public/images/Stop_and_Play_fill.svg" alt="" />
                </div>
            </div>
        </div>
       </div>
      </>
    )
  }
  
  export default SongCardComponent
  