import { useEffect, useRef } from "react";
import { useState } from "react";

function songCardHook(songsList){
    const audioRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songDuration, setSongDuration] = useState({key: '', minutes: '00', seconds: '00'});
    const [currentTime, setCurrentTime] = useState({key: '', minutes: '00', seconds: '00'})
    const [progress, setProgress] = useState(0);

    const play = () => {
        if(!isPlaying){
            audioRef.current.play();
            setIsPlaying(true);
        }else{
            audioRef.current.pause();
            setIsPlaying(false);
        }
    }
    const resetSongs = () => {
        audioRef.current.pause();
        setIsPlaying(false);
        audioRef.current.currentTime = 0;
        setCurrentIndex(0);
        audioRef.current.load();
        setCurrentTime({key: '', minutes: '00', seconds: '00'});
        setSongDuration({key: '', minutes: '00', seconds: '00'});
        setProgress(0);
    }

    const nextSong = () => {
        setIsPlaying(false);
        if(currentIndex < songsList.length -1) {
            audioRef.current.pause();
            setSongDuration({key: '', minutes: '00', seconds: '00'})
            setCurrentIndex(prevIndex => prevIndex + 1);
            setIsPlaying(true);
        } else {
            resetSongs();
        }
    }

    const previousSong = () => {
        if(currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
            setIsPlaying(true);
            setSongDuration({key: '', minutes: '00', seconds: '00'})
        }else {
            resetSongs();
        }
    }

    const changeSong = () => {
        audioRef.current.load();
        if (isPlaying) {
            audioRef.current.play();
        }
    }

    const songOnTimeUpdate = () => {
        const { currentTime, duration } = audioRef.current;
        if(currentTime && duration) {
            getDurationFormat(duration);
            getCurrentTime(currentTime);
            setProgressBar(currentTime, duration);
        }
        
    }

    const setProgressBar = (currentTime, duration) => {
        const progressPercent = (currentTime / duration) * 100;
        setProgress(progressPercent);
    }

    const getDurationFormat = (time) => {
        const minutes = Math.floor(time / 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().split('.')[0];
        setSongDuration({key: '', minutes, seconds})
    }

    const getCurrentTime = (time) => {
        const totalSeconds = Math.floor(time);
        const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
        const seconds = (totalSeconds % 60).toString().padStart(2, '0');
        setCurrentTime({key: '', minutes, seconds})
    }

    useEffect(() => {
        changeSong();
    }, [currentIndex]);

    return {
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
    }
}

export default songCardHook;