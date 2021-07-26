import axios from 'axios';

export default axios.create({
    baseURL: `https://lms-laravel-react.herokuapp.com/api/`
});
