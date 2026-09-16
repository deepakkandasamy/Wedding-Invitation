"use client";

import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState("");

  const toggleMusic = async () => {
    console.log("Music button clicked!");

    if (!audioRef.current) {
      console.log("Audio element not found");
      setError("Audio element not found");
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      setError("");
      await audioRef.current.play();
      setIsPlaying(true);
      console.log("Music started!");
    } catch (err) {
      console.error("Audio playback failed:", err);
      setError("Could not play audio");
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/wedding.mp3"
        loop
        preload="auto"
        onError={() => {
          console.error("Audio file failed to load");
          setError("Audio file not found");
        }}
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

      {error && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            zIndex: 1001,
            padding: "10px 14px",
            background: "#8B0000",
            color: "white",
            fontSize: "12px",
            borderRadius: "6px",
          }}
        >
          {error}
        </div>
      )}
    </>
  );
}