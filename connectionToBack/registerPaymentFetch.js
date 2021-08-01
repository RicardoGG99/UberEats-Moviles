import { setRes } from "./setGetRes";

const registerPaymentFetch = async (from, to, name, ci, dt, code, amount, item) => {
  try {
    const body = {
      from: from,
      to: to,
      name: name,
      ci: ci,
      dt: dt,
      code: code,
      amount: amount,
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
      `https://uber-eats-moviles.herokuapp.com/createpayment/${item}`,
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
export default registerPaymentFetch;
