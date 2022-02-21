let qqq = e.target.value;

function fetchCountries(params) {
  fetch(`${URL}/?key=${KEY}&q=${params}&image_type=photo`)
    .then(res => {
      if (!res.ok) {
        throw new res();
      }
      return res.json();
    })
    .then(res => {
      return res;
    });
}

fetchCountries(qqq)
  .then(img => {
    const templateCountryInfo = createCountryList(img);
    renderCountryInfo(templateCountryInfo);
  })
  .catch(error => {
    const incorrectInput = '';
    renderCountryInfo(incorrectInput);
    Notiflix.Notify.failure('Oops, there is no country with that name');
    console.log(error);
  });

function createCountryList(countries) {
  if (countries.length === 1) {
    return countries.map(country => countryTemplate(country)).join('');
  } else if (countries.length >= 2 && countries.length <= 10) {
    return countries.map(country => countryMinTemplate(country)).join('');
  } else {
    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    return '';
  }
}

// fetch(`${URL}/?key=${KEY}&q=${e}&image_type=photo`)
//   .then(response => response.json())
//   .then(posts => console.log(posts))
//   .catch(error => console.log(error));
