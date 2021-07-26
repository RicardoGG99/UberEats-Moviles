import { setRes } from './setGetRes';

const data = {
  method: 'GET',
  mode: 'cors',
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};
const getCommercesFetch = async (id) => {
  const res = await fetch(`https://uber-eats-moviles.herokuapp.com/products/${id}`, data);
  return await res.json();
};

export default getCommercesFetch;