import { setRes } from './setGetRes';

const createCommerceFetch = async ( name, category, location, dsc) => {
  try {
    const body = {
      name: name,
      category: category,
      location: location,
      dsc: dsc
    };

    const data = {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };

    return await fetch('https://uber-eats-moviles.herokuapp.com/createcommerce', data)
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
export default createCommerceFetch;