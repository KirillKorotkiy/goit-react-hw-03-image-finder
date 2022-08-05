import axios from 'axios';

const searchAPI = async (search, page) => {
  const key = '28849807-1f9f2c838f4100310a08c3c07';
  const BASE_URL = 'https://pixabay.com/api/';
  const response =
    await axios.get(`${BASE_URL}?key=${key}&q=${search}&image_type=photo&orientation=horizontal
    &safesearch=true&per_page=12&page=${page}`);
  return response.data.hits;
};

export default searchAPI;
