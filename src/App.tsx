
import { ApiContextProvider } from './store/ApiContext';
import { Routes, Route } from 'react-router-dom';
import TopNav from './components/TopNav';
import './App.css';
import MockCardsPage from './providers/mock-service-provider/components/MockCardsPage';
import StarWarsCardsPage from './providers/star-wars-provider/components/StarWarsCardsPage';
import FootballCardsPage from './providers/fpl-provider/components/FootballCardsPage';
import HomePage from './components/HomePage';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <ApiContextProvider>
      <TopNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mock" element={<MockCardsPage />} />
        <Route path="/starwars" element={<StarWarsCardsPage />} />
        <Route path="/football" element={<FootballCardsPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </ApiContextProvider>
  );
}

export default App;
