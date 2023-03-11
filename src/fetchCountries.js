import Notiflix from 'notiflix';
const baseUrl = 'https://restcountries.com/v3.1/name/';
const option = 'fields=name,capital,population,flags,languages';

export const fetchCountries = function fetchCountries(name) {
  return fetch(`${baseUrl}${name}?${option}`).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(
        Notiflix.Notify.failure('Oops, there is no country with that name')
      );
    }
  });
};
