import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';
import { DEBOUNCE_DELAY, refs } from './refs';
import { renderAllCountryCard, renderCountryCard } from './render-markup';

refs.search.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  const text = e.target.value.trim();
  refs.countryList.innerHTML = '';

  if (text === '') {
    refs.countryInfo.innerHTML = '';
    return;
  }
  fetchCountries(text)
    .then(data => {
      if (data.length > 10) {
        return Notiflix.Notify.failure(
          'Too many matches found. Please enter a more specific name.'
        );
      }
      data.map(country => {
        refs.countryInfo.innerHTML = '';
        renderAllCountryCard(country);
        if (data.length === 1) {
          refs.countryList.innerHTML = '';
          renderCountryCard(country);
        }
      });
    })
    .catch(error => {
      console.log(error);
    });
}
