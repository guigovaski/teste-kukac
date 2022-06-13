import axios from 'axios';

const api = axios.create({
    baseURL: 'https://viacep.com.br/ws'
});

export async function getCeps(cepsArr: string[]) {
    return cepsArr.map(item => item.replace(/\D/g, ''))
        .map(item => api.get(`/${item}/json/`)
            .catch(err => err))
}