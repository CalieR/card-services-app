import { IServiceProvider } from '../types/card-app-types';

const fetchData = async (service: IServiceProvider) => {
  try {
    const response = await service.getData();
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default fetchData;
