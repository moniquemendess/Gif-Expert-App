// test 01:
// Poner el props onNewCategory
// para disparar un evento utilizamos el fireEvent y cambiamos el evento
// el input es un objecto
// expect(input.value).toBe("Monique");verifica si es igual la escrita entre los valores.
// paso 2 disparar el submit del formulario, fireEvent.submit(form);

import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Prueba en <addCategory/>", () => {
  test("debe de cambiar el valor de la caja de texto ", () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Monique" } });

    expect(input.value).toBe("Monique");
  });

  test("debe de llamar onNewCategory si el input tiene un valor  ", () => {
    const inputValue = "Monique";
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });

    fireEvent.submit(form);

    //screen.debug();
    expect(input.value).toBe("");
    expect(onNewCategory).toHaveBeenCalled(); // se la funcion fue llamada
    expect(onNewCategory).toHaveBeenCalledTimes(1); // se la funcion fue llamada una vez
    expect(onNewCategory).toHaveBeenCalledWith(inputValue); // avaluando se fue llamado con el valor de la caja de texto
  });
});
