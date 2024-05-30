import moduleName from "module";
const { render, screen } = require("@testing-library/react");
const { GifGrid } = require("../../src/components/GifGrid");

describe("Pruebas en <GifGrid/>", () => {
  const category = "One Punch";
  test("debe de mostrar el loading inicialmente ", () => {
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });
});
