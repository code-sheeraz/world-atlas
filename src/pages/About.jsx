import countryFacts from "../api/countryData.json";
export const About = () => {
  return (
    <section className="container section-about">
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we're proud of.
      </h2>
      <div className="gradient-cards">
        {countryFacts.map((country) => {
            const{ id, name, population, interesting_fact, capital} =country;
          return (
            <div className="card"key={id}>
              <div className="container-card bg-blue-box">
                <p className="card-title">{name}</p>
                <p>
                  <span className="card-description">Capital:</span>
                  {capital}
                </p>

                <p>
                  <span className="card-description">Population:</span>
                  {population}
                </p>
                <p>
                  <span className="card-description">Interesting Fact:</span>
                  {interesting_fact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
