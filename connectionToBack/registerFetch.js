import { setRes } from './setGetRes';

const createUserFetch = async (email, password) => {
  try {
    const body = {
      email: email,
      password: password
    };

    const data = {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };

    return await fetch('https://uber-eats-moviles.herokuapp.com/create', data)
      .then((cat) => {
        if (cat.status == 200) {
          setRes('Success');
        } else {
          setRes('Fail');
        }
      })
      .catch((error) => {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        throw error;
      })
      .then((response) => {
        console.log('Success: ', response);
      });
  } catch (error) {
    console.log(error);
  }
};

export default createUserFetch;