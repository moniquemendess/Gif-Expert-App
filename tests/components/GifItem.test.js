import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

// Observaciones: screen.debug(); es un console.log  imprime la representación actual del el DOM
// test 2: verifica si la url es la miesma que estamos avaluando
// test 3: verificar se el titulo existe utilizando el tobetruthy

describe("Pruebas en <GifItem/>", () => {
  const title = "Monalisa";

  const url = "https://monalisatest/monalisa.jpg";

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    // expect( screen.getByRole('img').src ).toBe( url );
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("debe de mostrar el titulo en componente ", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
