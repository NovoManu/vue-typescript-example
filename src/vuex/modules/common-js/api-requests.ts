const BASE_URL: string = 'https://jsonplaceholder.typicode.com/'

export async function httpGetRequest(url: string) {
  return fetch(BASE_URL + url).then(res => res.json())
}
