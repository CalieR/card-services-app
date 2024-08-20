import { type Card } from '../types/card-app-types';

const ItemCard = ({ card }: { card: Card }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{card.name}</h2>
        <img src={card.imageUrl} alt={card.name} />
      </div>
    </div>
  );
};

export default ItemCard;
