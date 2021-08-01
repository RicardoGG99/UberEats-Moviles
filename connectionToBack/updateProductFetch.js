import { setRes } from "./setGetRes";

const updateProductFetch = async (name, dsc, price, id) => {
  try {
    const body = {
      name: name,
      dsc: dsc,
      price: price,
    };

    const data = {
      method: "PUT",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    return await fetch(
      `https://uber-eats-moviles.herokuapp.com/updateproduct/${id}`,
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
export default updateProductFetch;
