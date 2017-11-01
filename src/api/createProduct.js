import env from '../env.js';

export default function createProduct(product) {
  return fetch(`${env.REACT_APP_API_BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: product.name,
      description: product.description,
      category: product.category,
      isFeatured: product.isFeatured || false,
      price: product.price,
      imageUrl: product.imageUrl
    })
  })
    .then(response => {
      return response.json();
    })
    .then(response => {
      return response;
    });
}
