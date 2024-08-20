import { type Card, IServiceProvider } from '../../types/card-app-types';

class MockService implements IServiceProvider {
  getData = async () => {
    return new Promise<Card[]>((resolve) => {
      const data = [
        {
          id: 1,
          name: 'Luke Skywalker',
          imageUrl: 'https://baconmockup.com/200/200/',
        },
        {
          id: 2,
          name: 'Darth Vader',
          imageUrl: 'https://baconmockup.com/300/300/',
          height: '202',
          mass: '136',
        },
      ];
      resolve(data);
    });
  };
}

export default MockService;
