import Drink from "../interfaces/Drink";

const URL: String = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
// function to fetch drinks data by name
export default function fetchCocktail(name: String, option?: Object) {
  const timeout: Promise<Drink[]> = new Promise((resolve, reject) => {
    setTimeout(reject, 5000, 'fetch timeout');
  });
  let response: Promise<Drink[]> = fetch(`${URL}${name}`, option)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json.drinks;
    });

  // console.log(drinks);
  const result: Promise<Drink[]> = Promise.race([timeout, response]);
  return result;
}
