
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const API_KEY = '22046149-41a2515b5a783e6a5f4bfbfcc';

export default {
  searchQuery: '',
  page: 1,

  fetchImg() {
    return axios
      .get(
        `/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${API_KEY}`,
      )
      .then(({ data }) => {
        this.incrementPage();
        return data.hits;
      })
      .catch(error => console.error(error));
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },
};

// export default class ApiService {
//   constructor() {
//     this.page = 1;
//   }

//   /**
//    *
//    * @param {*}
//    * fetchRequest(value) {
//     const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${value}&page=${this.page}&per_page=12&key=${API_KEY}`;

//     return fetch(url)
//       .then(resolve => resolve.json())
//       .then(result => {
//         return result;
//       })
//       .catch(error => console.log('ERROR:', error));
//   }value
//    * @returns
//    */

//   async aFetchRequest(value) {
//     const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${value}&page=${this.page}&per_page=12&key=${API_KEY}`;

//     const resolve = await fetch(url);
//     return await resolve.json();
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   markupGallery(request) {
//     const galleryMarkup = galleryTpl(request);
//     refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);
//   }

//   clearMarkup() {
//     refs.gallery.innerHTML = '';
//   }
// }
