import { createContext, useState } from 'react';
import fetchData from '../hooks/useFetch';

import MockService from '../providers/mock-service-provider/service';

import { Card, IServiceProvider } from '../types/card-app-types';

type ApiContextState = {
  data: Card[];
  isPending: boolean;
  //error: any;
  service: IServiceProvider;
  setService: (service: IServiceProvider) => void;
  initialise: () => void;
};

const ApiContext = createContext<ApiContextState>({
  data: [],
  isPending: false,
  //error: null,
  service: new MockService(),
  setService: () => {},
  initialise: () => {},
});

export const ApiContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<Card[]>([]);
  const [isPending, setIsPending] = useState<boolean>(true);
  //const [error, setError] = useState<string | null>(null);

  const [service, setService] = useState(new MockService());

  const initialise = async () => {
    const apiResponse = await fetchData(service);
    setIsPending(true);
    if (apiResponse) {
      setData(apiResponse);
      setIsPending(false);
    }
  };
  return (
    <ApiContext.Provider
      value={{
        data,
        isPending,
        service,
        //error,
        setService,
        initialise,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
