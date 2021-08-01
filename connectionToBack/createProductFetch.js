import { setRes } from "./setGetRes";

const createProductFetch = async (name, dsc, price, item) => {
  try {
    const body = {
      name: name,
      dsc: dsc,
      price: price,
    };

    const data = {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    return await fetch(
      `https://uber-eats-moviles.herokuapp.com/createproduct/${item}`,
      data
    )
      .then((cat) => {
        console.log(cat.status);
        if (cat.status == 200) {
          setRes("Success");
        } else {
          setRes("Fail");
        }
      })
      .catch((error) => {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
        throw error;
      })
      .then((response) => {
        console.log("Success: ", response);
      });
  } catch (error) {
    console.log(error);
  }
};
export default createProductFetch;
