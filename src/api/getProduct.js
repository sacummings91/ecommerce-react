import env from '../env.js';

export default function getProduct(id) {
  return fetch(`${env.API_BASE_URL}/item/${id}`, {}).then(response => {
    return response.json();
  });
}
