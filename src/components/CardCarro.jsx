import './CardCarro.css'; //Importação do CSS

function CardCarro({ car }) {
    return (
        <div className="card-container">
            <div className='card'>
                <img className="card-image" src={car.image} alt={`Imagem ${car.manufacturer} ${car.model}`} />
                <div className="card-info">
                    <h2 className="model">{car.model}</h2>
                    <p className="price">R$ {car.price}</p>
                </div>
            </div>
        </div>
    );
}

export default CardCarro;
