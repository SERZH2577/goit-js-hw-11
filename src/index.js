import Notiflix from 'notiflix';
import Axios from 'axios';

const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', onSearchBtn);
searchForm.addEventListener('input', onSearchInput);

function onSearchBtn(e) {
  e.preventDefault();
  console.log(e.target.value);
}

function onSearchInput(e) {
  console.log(e.target.value);
}
