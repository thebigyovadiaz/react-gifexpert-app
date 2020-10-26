import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas Unitarias de <GifGridItem />", () => {
  const title = "Esto es titulo de la imagen";
  const url = "http://pruebas.testing.com";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Debe hacer matchSnapshot del componente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe devolver el párrafo con el title", () => {
    const p = wrapper.find("p").text().trim();
    expect(p).toBe(title);
  });

  test("Debe devolver el alt del img igual a title y src igual a url", () => {
    const img = wrapper.find("img")
    const src = img.prop("src");
    const alt = img.prop("alt");

    expect(alt).toBe(title);
    expect(src).toBe(url);
  });

  test("Debe tener en el div la clase animate__fadeInUpBig", () => {
    const div = wrapper.find("div").prop('className');
    const searchText = div.includes("animate__fadeInUpBig");
    expect(searchText).toBe(true);
  });
});
