"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const startMusic = async () => {
      if (!audioRef.current) return;

      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch {
        // Browser blocked autoplay.
        console.log("Autoplay blocked until user interaction");
      }
    };

    startMusic();
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (!audioRef.current.paused) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      setError("");
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (err) {
      console.error("Audio playback failed:", err);
      setError("Could not play audio");
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/Wedding-Invitation/music/wedding.mp3"
        loop
        preload="auto"
      />

      <button
        type="button"
        className="music-toggle"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause wedding music" : "Play wedding music"}
      >
        <span className="music-icon">
          {isPlaying ? "❚❚" : "♪"}
        </span>

        {isPlaying && (
          <span className="music-bars" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        )}
      </button>
    </>
  );
}