// import './css/style.css';
import './sass/main.scss';
import Notiflix from 'notiflix';
import axios from 'axios';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getSearchImg, onLoadMore } from './js/api/imagesApi';
import imagesCardTemplate from './js/components/imagesCard.hbs';
import { Pagination } from './js/components/pagination';

const searchFormEl = document.querySelector('#search-form');
const galleryEl = document.querySelector('.gallery');
const loadMoreBtnEl = document.querySelector('.load-more');

searchFormEl.addEventListener('submit', onSearchBtn);
searchFormEl.addEventListener('input', onSearchInput);

// let pageNumber = 1;

const imagePagination = new Pagination({
  total: 1000,
  onChangePage(val) {
    console.log(val);
  },
});

imagePagination.nextPage();

const rendorImagesList = images => {
  const imagesList = images
    .map(image => {
      const { largeImageURL, webformatURL, tags, likes, views, comments, downloads } = image;
      return imagesCardTemplate({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      });
    })
    .join('');

  galleryEl.innerHTML = imagesList;

  let lightbox = new SimpleLightbox('.gallery a');
};

function onSearchBtn(e) {
  e.preventDefault();

  getSearchImg().then(({ data }) => {
    const { hits: images } = data;

    console.log(getSearchImg());
    console.log(data.totalHits);

    if (data.hits.length < 1) {
      Notiflix.Notify.failure('Oops, there is no country with that name');
      galleryEl.innerHTML = '';

      loadMoreBtnEl.classList.add('hide_element');
    } else {
      rendorImagesList(images);

      loadMoreBtnEl.classList.remove('hide_element');

      Notiflix.Notify.info(`Hooray! We found ${data.totalHits} images.`);
    }
  });
}

// onLoadMore(loadMoreBtnEl);

// ++++++++++++++++++++++++++++++

function onSearchInput(e) {
  console.log(e.target.value);
}

// Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');

// function fetchCountries(params) {
//   fetch(`${URL}/?key=${KEY}&page=${pageNumber}&per_page=40&q=${params}&image_type=photo`)
//     .then(res => {
//       if (!res.ok) {
//         throw new res();
//       }
//       return res.json();
//     })
//     .then(res => {
//       return res;
//     });
// }
