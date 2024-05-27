import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en <GifItem/>", () => {
  test("Debe de hacer match con el snapshot", () => {
    const title = "Monalisa";

    const url = "https://monalisatest/monalisa.jpg";

    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
});
