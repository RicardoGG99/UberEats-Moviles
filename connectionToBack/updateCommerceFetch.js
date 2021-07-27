import { setRes } from "./setGetRes";

const updateCommerceFetch = async (name, category, location, dsc, id) => {
  try {
    const body = {
      name: name,
      category: category,
      location: location,
      dsc: dsc,
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
      `https://uber-eats-moviles.herokuapp.com/updatecommerce/${id}`,
      data
    )
      .then((cat) => {
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
export default updateCommerceFetch;
