// teste 01: el estado inicial del hook es las imagens sean un arreglo vacio y isloading estea en true

import { renderHook } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en el hook useFetchGifs", () => {
  test("debe de regresar el estado inicial  ", () => {
    const { result } = renderHook(() => useFetchGifs("One Puch"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });
});
