import axios from "axios";
const countryApi = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});

export const getCountryData = () => {
  return countryApi.get("/all?fields=name,population,region,capital,flags");
};

//Individual Country
export const getCountryIndData = (name) => {
  return countryApi.get(
    `/name/${name}?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
};

