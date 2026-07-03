import { BREEDS } from '../data/breeds.js';

function renderBreedCard(breed) {
  const paragraphs = breed.paragraphs
    .map((text) => (text ? `<p>${text}</p>` : '<p></p>'))
    .join('');

  return `
    <div class="paragraph-container">
        <h4><a href="${breed.wiki}" target="_blank" rel="noopener noreferrer">${breed.name}</a></h4>
        <img src="${breed.image}" alt="${breed.alt}">
        ${paragraphs}
    </div>
  `;
}

export function renderGallery(container) {
  container.innerHTML = `
    <div class="heading-container">
        <h3>Gallery of Fame: Most Popular Indian Cat Breeds</h3>
    </div>
    ${BREEDS.map(renderBreedCard).join('')}
  `;
}
