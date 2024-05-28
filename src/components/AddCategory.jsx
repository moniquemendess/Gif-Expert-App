// Cada component puede tener state/hooks

import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return; // condición para insertar los caracteres mayor que uno

    onNewCategory(inputValue.trim()); // insertar las nuevas categorias al input, desestructurando y con las props

    setInputValue(""); // limpar la caja de texto
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
