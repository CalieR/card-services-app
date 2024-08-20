import { IServiceProvider } from '../../types/card-app-types';
import { Character } from '../../types/star-wars-types';

const starWarsUrl = 'https://swapi.dev/api/people/';

const getPageNumberFromUrl = (url: string) => {
  const searchPrams = url.split('?')[1];
  const params = new URLSearchParams(searchPrams);
  return params.has('page') ? params.get('page') : 1;
};

class StarWarsService implements IServiceProvider {
  getData = async () => {
    const response = await fetch(starWarsUrl);
    const data = await response.json();
    const pageNumber = getPageNumberFromUrl(starWarsUrl);
    const characters = data.results.map((result: Character, index: number) => {
      const id = `${pageNumber}${index + 1}`;
      return {
        ...result,
        id,
        imageUrl: `https://picsum.photos/200?random=${id}`,
      };
    });
    return characters;
  };
}

export default StarWarsService;
