import { DEBOUNCE_DELAY, refs } from './refs';
export const renderAllCountryCard = function renderAllCountryCard({
  name,
  flags,
}) {
  const markupAll = `<li>
      <img class="flags" src=${flags.svg} alt="flags">
      <b>${name.official}</b>
    </li>`;
  refs.countryList.insertAdjacentHTML('beforeend', markupAll);
};
export const renderCountryCard = function renderCountryCard({
  name,
  capital,
  population,
  flags,
  languages,
}) {
  const value = Object.values(languages);
  const markup = `<div>
  <img class="flags" src=${flags.svg} alt="flags">
  <b>${name.official}</b>
  <p><span class="text">Capital</span>: ${capital}</p>
    <p><span class="text">Population</span>: ${population}</p>
    <p><span class="text">Languages</span>: ${value}</p>
    </div>`;
  refs.countryInfo.innerHTML = markup;
};
