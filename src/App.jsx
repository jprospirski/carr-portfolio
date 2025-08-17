import { useState, useEffect } from "react";
import { cars as carsData } from "./data/cars.js";
import CardCarro from "./components/cardCarro.jsx";

function App() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    setCars(carsData);
  }, []);

  return (
    <div>
      <h1>Catálago de carros</h1>
      <div>
        <h2>Carros disponíveis:</h2>
        <div>
          {cars.map(car =>
            <CardCarro key={car.id} car={car} />
          )}
        </div>
      </div>
    </div>
  )
}

export default App;