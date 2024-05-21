// Cada component puede tener state/hooks

import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    console.log("🚀 ", target.value);
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return; // condición para insertar los caracteres mayor que uno

    onNewCategory(inputValue.trim()); // insertar las nuevas categorias al input, desestructurando y con las props

    setInputValue(""); // para borrar el input despues de insetar la palavra
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
