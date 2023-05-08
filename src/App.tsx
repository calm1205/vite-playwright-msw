import { useQueryCoffee } from "./hooks/useQueryCoffee";

export const App = () => {
  const { coffees } = useQueryCoffee();

  return (
    <>
      <h1>hello world</h1>
      {coffees?.map((coffee, index) => (
        <div key={index}>{coffee?.title}</div>
      ))}
    </>
  );
};
