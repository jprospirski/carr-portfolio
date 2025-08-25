import CardCarro from './CardCarro.jsx';
import './SecaoFabricante.css';

function SecaoFabricante({ manufacturer, cars }) {
  return (
    <section className="manufacturer-section">
      <h2 className="manufacturer-title">{manufacturer}</h2>
      <div className="car-list-container">
        {cars.map(car => (
          <CardCarro key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
}

export default SecaoFabricante;