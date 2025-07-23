import { NavLink } from "react-router-dom";
export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;
  return (
    <li className="country-card cards">
      <div className="container-card bg-blue-box">
          <img src={flags.svg} alt={flags.alt}  />
          <div className="CountryInfo">
            <p className="card-title">
              {name.common.length > 10
                ? name.common.slice(0, 10) + ".."
                : name.common}
            </p>
            <p>
              <span className="card-description">Region: </span>
              {region}
            </p>
            <p>
              <span className="card-description">Capital: </span>
              {capital[0]}
            </p>
            <p>
              <span className="card-description">Population: </span>
              {population}
            </p>
            <NavLink to={`/country/${name.common}`}>
              <button className="">Read More</button>
            </NavLink>
          </div>
        </div>
    </li>
  );
};
