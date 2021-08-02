export default {
  form: document.querySelector('#search-form'),
  gallery: document.querySelector('.js-gallery'),
  loadMoreBtn: document.querySelector('button[data-action="load-more"]'),
  loadMoreLabel: document.querySelector('button[data-action="load-more"] > .label'),
  loadMoreSpinner: document.querySelector('button[data-action="load-more"] > .spinner'),
};

// const body = document.querySelector('body');

// const loadMoreBtn = document.createElement('button');
// const gallery = document.createElement('ul');

// const formTpl =
//   '<form class="search-form" id="search-form"><input type="text" name="query" autocomplete="off" placeholder="Search images..." /></form>';

// markupForm(formTpl);

// const form = document.querySelector('#search-form');

// loadMoreBtn.type = 'submit';
// loadMoreBtn.textContent = 'Load More';
// loadMoreBtn.classList.add('load-more-btn');

// gallery.classList.add('gallery');

// form.append(loadMoreBtn);
// form.before(gallery);

// export const refs = {
//   body,
//   form,
//   loadMoreBtn,
//   gallery,
// };

// function markupForm(template) {
//   body.insertAdjacentHTML('beforeend', template);
// }

// export function isBtnHidden(value) {
//   if (!value) {
//     return (loadMoreBtn.style.display = 'block');
//   }
//   return (loadMoreBtn.style.display = 'none');
// }
