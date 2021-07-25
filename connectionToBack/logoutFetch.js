import { setRes } from './setGetRes';

const logoutFetch = async () => {
  try {
    const data = {
      method: 'GET',
      mode: 'no-cors',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    await fetch('https://p2moviles.herokuapp.com/logout', data).then((dog) => {
      console.log(dog.status);
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

export default logoutFetch;
