import { useState } from "react";
import { AddCategory } from "../components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = () => {
    setCategories([...categories, "Super Mario"]); // utilizar el spread (desestructuración) para insertar al arreglo
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory />

      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
