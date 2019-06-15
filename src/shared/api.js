import axios from 'axios';

export function fetchComponents(req, domain) {
  let regex = /\//gi;
  let page = req.path.toString().replace(regex, '');

  if (!page) {
    page = 'home';
  }
  if(page === 'ampsearch') {
    page = 'search';
  }

  return axios.get(`http://localhost:1337/widgets?_sort=order:asc&isactive=true&pages_contains=${page}&site_contains=localhost`)
    .then((component) => {
    
      return component.data
    })
    .catch((error) => {
      console.warn(error)
      return null
    })
}
