const API_KEY = '6c1c3476170c45449b26a972797cff34';
const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

export async function fetchNews() {
    const res = await fetch(URL);
    return res.json();
};