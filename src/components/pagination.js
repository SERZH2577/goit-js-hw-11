import { refs } from './refs';

export function onGoesNextPage(pageNumber, inputValue, totalHits, callback) {
  pageNumber += 1;

  if (pageNumber === Math.ceil(totalHits / 40)) {
    Notiflix.Notify.info(
      "We're sorry, but you've reached the end of search results."
    );

    refs.btnNextRef.setAttribute('disabled', '');
  }

  callback(inputValue);

  refs.btnBackRef.removeAttribute('disabled');
}

export function onReturnsPreviousPage(pageNumber, inputValue, callback) {
  pageNumber -= 1;

  if (pageNumber === 1) {
    refs.btnBackRef.setAttribute('disabled', '');
  }

  callback(inputValue);

  refs.btnNextRef.removeAttribute('disabled');
}
