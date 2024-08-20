import { useContext, useEffect } from 'react';
import ApiContext from '../store/ApiContext';
import ItemCard from './ItemCard';

const CardList = () => {
  const apiContext = useContext(ApiContext);
  const { initialise, isPending } = apiContext;
  const cards = apiContext.data;

  useEffect(() => {
    initialise();
  }, []);

  return (
    <div className="card-list flex flex-row flex-wrap justify-center gap-4">
      {isPending && <p>Loading...</p>}
      {cards.map((card) => (
        <ItemCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardList;
