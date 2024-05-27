// Primero paso estabelecer el sujeto de pruebas
// Poner el props onNewCategory
// para disparar un evento utilizamos el fireEvent y cambiamos el evento
// el input es un objecto
// expect(input.value).toBe("Monique");verifica si es igual la escrita entre los valores.

import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Prueba en <addCategory/>", () => {
  test("debe de cambiar el valor de la caja de texto ", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "Monique" } });
    expect(input.value).toBe("Monique");
  });
});
