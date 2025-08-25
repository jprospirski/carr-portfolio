import { useState, useEffect } from "react";
import { cars as carsData } from "./data/cars.js";

//Importação dos componentes
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import SecaoFabricante from './components/SecaoFabricante.jsx';

function App() {
  const [groupedCars, setGroupedCars] = useState({});

  useEffect(() => {
    const carsByManufacturer = carsData.reduce((acc, car) => {
      const manufacturer = car.manufacturer;
      if (!acc[manufacturer]) {
        acc[manufacturer] = [];
      }
      acc[manufacturer].push(car);
      return acc;
    }, {});

    setGroupedCars(carsByManufacturer);
  }, []);

  return (
    <>
      <Header />

      <main className="container">
        {Object.keys(groupedCars).map(manufacturer => (
          <SecaoFabricante
            key={manufacturer}
            manufacturer={manufacturer}
            cars={groupedCars[manufacturer]}
          />
        ))}
      </main>

      <Footer />
    </>
  )
}
export default App;