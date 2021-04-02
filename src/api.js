import axios from 'axios';

const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
        key: 'AIzaSyCgvjEIef8Dc6IHaew-wmxlf8bg9P2g8OQ'
    }
});

export default request;