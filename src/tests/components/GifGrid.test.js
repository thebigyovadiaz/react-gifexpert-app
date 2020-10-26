import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("Pruebas Unitarias de <GifGrid />", () => {
  const category = "Goku";

  test("Debe crear el snapshot del componente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar los items al cargar imágenes useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost/hola.jpg",
        title: "Hola",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    // expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
