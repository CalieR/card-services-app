import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import ApiContext from '../store/ApiContext';
import MockService from '../providers/mock-service-provider/service';
import StarWarsService from '../providers/star-wars-provider/service';

export default function TopNav() {
  const { setService } = useContext(ApiContext);

  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <NavLink to="/">
        <h1>Card Services</h1>
      </NavLink>
      <div className="flex flex-row items-center gap-4">
        <ul>
          <li>
            <NavLink to="/mock" onClick={() => setService(new MockService())}>
              Mock
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/starwars"
              onClick={() => setService(new StarWarsService())}
            >
              Star Wars
            </NavLink>
          </li>
          <li>
            <NavLink to="/football">Football</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// TODO: Convert the list to a dropdown menu
