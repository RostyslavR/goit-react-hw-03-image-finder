import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const API_KEY = '1631539-db8210cabd2636c6df59812df';

const queryOptions = {
  key: API_KEY,
  per_page: 12,
};

export const fetchImages = async (q, page = 1) => {
  try {
    const response = await axios.get('/', {
      params: { q, page, ...queryOptions },
    });

    const images = response.data.hits.map(
      ({ id, webformatURL, tags, largeImageURL }) => ({
        id,
        webformatURL,
        tags,
        largeImageURL,
      })
    );
    const totalPages = Math.ceil(
      response.data.totalHits / queryOptions.per_page
    );
    return { images, totalPages };
  } catch (error) {
    console.log(error);
  }
};
