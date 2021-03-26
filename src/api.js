import axios from 'axios';

const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
        key: 'AIzaSyB0WaG8QhktU6NpvI9xLdpjAPmDbyvF89o'
    }
});

export default request;