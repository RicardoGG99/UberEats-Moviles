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

const deleteCarItemFetch = async (item) => {
    const res = await fetch(`http://localhost:4000/deleteitem/${item}`, data);
    return 'Success';
}

export default deleteCarItemFetch;