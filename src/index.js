import './css/style.css';
import Notiflix from 'notiflix';
import Axios from 'axios';

const searchForm = document.querySelector('#search-form');

const URL = 'https://pixabay.com/api';
const KEY = '25810966-6fb22a4db6c9a757ebd742847';

searchForm.addEventListener('submit', onSearchBtn);
searchForm.addEventListener('input', onSearchInput);

function onSearchBtn(e) {
  e.preventDefault();
  console.log(e.target.value);
}

function onSearchInput(e) {
  console.log(e.target.value);
}
