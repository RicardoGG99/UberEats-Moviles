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
const getCarItemsFetch = async () => {
  const res = await fetch(`https://uber-eats-moviles.herokuapp.com/car`, data);
  return await res.json();
};

export default getCarItemsFetch;