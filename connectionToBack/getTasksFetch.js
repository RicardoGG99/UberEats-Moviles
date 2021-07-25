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
const getTasksFetch = async () => {
  const res = await fetch(`https://p2moviles.herokuapp.com/usertasks`, data);
  return await res.json();
};

export default getTasksFetch;
