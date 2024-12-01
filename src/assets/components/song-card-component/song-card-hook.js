import { useEffect, useRef } from "react";
import { useState } from "react";

function songCardHook(){
    const path = '../public/songs/';
    const [currentIndex, setCurrentIndex] = useState(0);
    const songsList =[
        `${path}forest-lullaby-110624.mp3`,
        `${path}lost-in-city-lights-145038.mp3`];
    const audioRef = useRef(new Audio(songsList[currentIndex]));
    const [isPlaying, setIsPlaying] = useState(false);

    const play = () => {
        if(!isPlaying){
            audioRef.current.play();
            setIsPlaying(true);
        }else{
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const nextSong = () => {
        if(currentIndex < songsList.length -1) {
            console.log(currentIndex);
            audioRef.current.pause();
            setCurrentIndex(prevIndex => prevIndex + 1);
            setIsPlaying(true)
        } else {
            resetSongs();
        }
    }

    const previousSong = () => {
        if(currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
    }

    const changeSong = () => {
        console.log('changeSong', isPlaying);
        console.log(currentIndex)
        audioRef.current = new Audio(songsList[currentIndex]);
        if (isPlaying) {
            audioRef.current.play();
        }
    }

    const resetSongs = () => {
        console.log('resetSong');
        audioRef.current.pause();
        setIsPlaying(false);
        audioRef.current.currentTime = 0;
        setCurrentIndex(0);
    }

    useEffect(() => {
        changeSong();
      }, [currentIndex]);

    return {play, isPlaying, nextSong, previousSong, currentIndex}
}

export default songCardHook;