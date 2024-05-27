import { getGifs } from "../../src/helpers/getGifs";

// La funcion es asincrona, utilizamos el async();
// Avaluamos  que los gifs.length sean mayores que cero con toBeGreaterThan(0)
// Avaluamos que el gifs en la posición cero, corresponde a uno objecto con 3 propriedades {id, title, url} con toEqual

describe("Pruebas en getGifs()", () => {
  test("debe de retomar un arreglo de gifs ", async () => {
    const gifs = await getGifs("One Punch");
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
