import moduleName from "module";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
const { render, screen } = require("@testing-library/react");
const { GifGrid } = require("../../src/components/GifGrid");
jest.mock("../../src/hooks/useFetchGifs");
//
// teste02: antes de renderizar, necesita el mock hook con el pas jest.mock("../../src/hooks/useFetchGifs");
//
describe("Pruebas en <GifGrid/>", () => {
  const category = "One Punch";

  test("debe de mostrar el loading inicialmente ", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });
  test("debe de mostrar items cuando se cargan las imágenes useFetchGifs ", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Monique",
        url: "https://localhost/monique.jpg",
      },
      {
        id: 123,
        title: "Monalisa",
        url: "https://localhost/monalisa.jpg",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
