export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSelectFilter = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value == "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };

  return (
    <section className="section-searchFilter container">
      <div>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button
          className=""
          onClick={() => {
            sortCountries("asc");
          }}
        >
          Asc
        </button>
      </div>
      <div>
        <button
          className=""
          onClick={() => {
            sortCountries("desc");
          }}
        >
          Desc
        </button>
      </div>
      <div>
        <select
          className="select-section"
          value={filter}
          onChange={handleSelectFilter}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};
