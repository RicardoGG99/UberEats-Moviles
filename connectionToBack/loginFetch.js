import { setRes } from './setGetRes';

const loginFetch = async (username, password) => {
  try {
    const body = {
      username: username,
      password: password,
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

    await fetch(`https://p2moviles.herokuapp.com/login`, data).then((dog) => {
      if (dog.status == 200) {
        setRes('Success');
      } else {
        setRes('Fail');
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export default loginFetch;
