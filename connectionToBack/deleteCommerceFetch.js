import { setRes } from './setGetRes';

const data = {
    method: 'DELETE',
    mode: 'cors',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  };

const deleteCommerceFetch = async (item) => {
    const res = await fetch(`https://uber-eats-moviles.herokuapp.com/deletecommerce/${item}`, data);
    return 'Success';
}

export default deleteCommerceFetch;