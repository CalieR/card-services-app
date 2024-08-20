import CardList from '../../../components/CardList';
import CardListTitle from '../../../components/CardListTitle';

export default function StarWarsCardsPage() {
  return (
    <div>
      <CardListTitle pageName='Star Wars Cards' />
      <CardList />
    </div>
  );
}
