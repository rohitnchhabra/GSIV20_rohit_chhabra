import axois from 'axios';
import { BASE_URL } from '../config';

export default function (url, method, data) {
    const URL = BASE_URL + url;
    if (method === 'GET') {
        return axois.get(URL);
    } else if (method === 'POST') {
        return axois.post(URL, data);
    }
}