import axios from 'axios';

const KEY = 'AIzaSyCgnRpQOyA-E1tJBShKH-tdvczY4aDmhT4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});