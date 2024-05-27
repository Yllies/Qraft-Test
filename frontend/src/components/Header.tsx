import { useState } from "react";

interface HeaderProps {
  setDistance: any;
  setDuration: any;
  distance: number;
  duration: number;
}

export default function Header({
  setDistance,
  setDuration,
  distance,
  duration,
}: HeaderProps) {
  const handleChangeKm = (e) => {
    setDistance(e.target.value);
  };

  const handleDuration = (e) => {
    setDuration(e.target.value);
  };

  return (
    <header>
      <div>
        <h2>Distance max</h2>
        <div>
          <input
            type="range"
            min={50}
            max={3000}
            step={50}
            value={distance}
            onChange={handleChangeKm}
          />
          <button>{distance} km</button>
        </div>
      </div>
      <div>
        <h2>Duration max</h2>
        <div>
          <input
            type="range"
            min={1}
            max={30}
            step={1}
            value={duration}
            onChange={handleDuration}
          />
          <button>
            {duration} {duration > 1 ? "days" : "day"}
          </button>
        </div>
      </div>
    </header>
  );
}
