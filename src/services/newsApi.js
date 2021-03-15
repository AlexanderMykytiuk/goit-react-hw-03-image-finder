import axios from 'axios';

const fetchHits = ({ serchQuery = '', currentPage = 1, per_page = 12 }) => {
  return axios.get(
    `https://pixabay.com/api/?key=20696463-7a82ec59bccfda41846317622&q=${serchQuery}&image_type=photo&per_page=${per_page}&page=${currentPage}&orientation=horizontal`,
  );
};

export default { fetchHits };