import { useState } from 'react';
import './CardCarro.css'; //Importação do CSS

function CardCarro({ car }) {

    const [onTop, setOnTop] = useState(false);

    return (
        <div className="card-container">
            <div className='card'>
                <img className="card-image" src={car.image} alt={`Imagem ${car.manufacturer} ${car.model}`} />
                <div className="card-info">
                    <h3>{car.model}</h3>
                    <p>R$ {car.price}</p>
                </div>
                    <div className='extra-info'>
                        <p>Ano de fabricação: {car.year}</p>
                        <p>Motor: {car.motor}</p>
                    </div>
            </div>
        </div>
    );
}

export default CardCarro;
