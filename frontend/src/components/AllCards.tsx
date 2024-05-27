import { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";

interface Car {
  id: number;
  pictureUrl: string;
  brand: string;
  model: string;
  pricePerDay: number;
  pricePerKm: number;
}

export default function AllCards() {
  const [allCars, setAllCars] = useState<Car[]>([]);
  const [distance, setDistance] = useState<number>(1);
  const [duration, setDuration] = useState<number>(1);

  const getAllCars = async () => {
    try {
      const url = new URL("http://localhost:3000/cars");

      if (distance !== 1) {
        // Si la distance est différente de 50, on ajoute un query distance à notre URL
        url.searchParams.append("distance", distance.toString());
      }
      if (duration !== 1) {
        // Si la distance est différente de 1, on ajoute un query duration à notre URL
        url.searchParams.append("duration", duration.toString());
      }

      const response = await fetch(url);
      const data = await response.json();
      setAllCars(data);
    } catch (error) {
      console.error("Error fetching", error);
    }
  };

  useEffect(() => {
    getAllCars();
  }, [distance, duration]);

  return (
    <>
      <Header
        setDistance={setDistance}
        distance={distance}
        setDuration={setDuration}
        duration={duration}
      />
      <div className="mainContainer">
        {allCars.map((car) => {
          return (
            <Card
              {...car}
              key={car.id}
              distance={distance}
              duration={duration}
            />
          );
        })}
      </div>
    </>
  );
}
