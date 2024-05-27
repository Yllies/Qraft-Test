interface CarProps {
  pictureUrl: string;
  brand: string;
  model: string;
  pricePerDay: number; // en cents
  pricePerKm: number; // en cents
  distance: number; // en km
  duration: number; // en jours
}

export default function Card({
  pictureUrl,
  brand,
  model,
  pricePerDay,
  pricePerKm,
  duration,
  distance,
}: CarProps) {
  const calculatePricePerDay = (day: number) => {
    if (day > 10) return pricePerDay * 0.5;
    if (day > 4) return pricePerDay * 0.7;
    if (day > 1) return pricePerDay * 0.9;
    return pricePerDay;
  };

  const calculateTotalPrice = (duration: number) => {
    let totalPriceDays = 0;
    for (let day = 1; day <= duration; day++) {
      // On va ajouter à totalPriceDays le prix degressif en fonction du nombre de jour par rapport à ce que nous renvoie la fonction calculatePricePerDay
      totalPriceDays += calculatePricePerDay(day);
    }
    const totalPriceKm = pricePerKm * distance;
    return (totalPriceDays + totalPriceKm) / 100;
  };

  const total = calculateTotalPrice(duration);

  return (
    <div className="card">
      <h2 className="brandModel">
        {brand} - {model}
      </h2>
      <img className="picture" src={pictureUrl} alt="car picture" />
      <p className="pricePerDay">
        Price per day: ${(pricePerDay / 100).toFixed(2)}$
      </p>
      <p className="pricePerKm">
        Price per km: ${(pricePerKm / 100).toFixed(2)}$
      </p>
      <p>Total: {total.toFixed(2)}$</p>
    </div>
  );
}
