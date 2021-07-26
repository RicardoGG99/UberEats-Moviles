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
const getCommercesFetch = async () => {
  const res = await fetch(`https://uber-eats-moviles.herokuapp.com/commerce`, data);
  return await res.json();
};

export default getCommercesFetch;