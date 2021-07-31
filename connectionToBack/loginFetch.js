import { setRes } from "./setGetRes";

const loginFetch = async (email, password) => {
  try {
    const body = {
      email: email,
      password: password,
    };
    const data = {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    return await fetch(
      `https://uber-eats-moviles.herokuapp.com/login`,
      data
    ).then((dog) => {
      console.log(dog.status);
      if (dog.status == 200) {
        setRes("Success");
      } else {
        setRes("Fail");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export default loginFetch;
