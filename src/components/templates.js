export function createImageCard({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
    <div class="photo-card">
    <a href="${largeImageURL}">
      <img src="${webformatURL}" alt="${tags}" class="img" loading="lazy" />
    </a>
      <div class="info">
        <p class="info-item">
        <b>Likes:</b> ${likes}
        </p>
        <p class="info-item">
        <b>Views:</b> ${views}
        </p>
        <p class="info-item">
        <b>Comments:</b> ${comments}
        </p>
        <p class="info-item">
        <b>Downloads:</b> ${downloads}
        </p>
      </div>

    </div>
  `;
}
