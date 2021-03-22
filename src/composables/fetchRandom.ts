import Drink from "../interfaces/Drink";

const URL: String = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
// function to fetch drinks data by name
export default function fetchRandom(option?: Object) {
  const timeout: Promise<Drink> = new Promise((_resolve, reject) => {
    setTimeout(reject, 5000, 'fetch timeout');
  });
  let response: Promise<Drink> = fetch(`${URL}`, option)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json.drinks[0];
    });

  // console.log(drinks);
  const result: Promise<Drink> = Promise.race([timeout, response]);
  return result;
}
