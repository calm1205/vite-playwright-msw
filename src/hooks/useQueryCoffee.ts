import { useQuery } from "react-query";
import { coffeeEndpoint } from "../__mocks__/endpoint";
import { CoffeeResponse } from "./types";

/**
 * react-queryでのコーヒーの銘柄取得
 */
export const useQueryCoffee = () => {
  const getCoffee = async () => {
    const response = await fetch(coffeeEndpoint);
    return response.json();
  };

  const { data } = useQuery<CoffeeResponse>("coffees", getCoffee);

  return {
    coffees: data,
  };
};
