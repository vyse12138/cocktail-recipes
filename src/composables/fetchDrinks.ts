import Drink from "../interfaces/Drink";

const URL: String = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

// function to fetch drinks data by name
export default async function fetchCocktail(name: String, option?: Object) {
  try {
    const response: Response = await fetch(`${URL}${name}`, option);
    const data = await response.json();
    const drinks: Array<Drink> = data.drinks;
    // console.log(drinks);
    return drinks;
  } catch (error) {
    console.log(error);
  } finally {
  }
}
