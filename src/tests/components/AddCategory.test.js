import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas Unitarias de <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  })
  
  test("Debe generar el snapshot de <AddCategory />", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe cambiar la caja de texto en el input', () => {
    const input = wrapper.find('input');
    const value = "Hola value";
    input.simulate('change', { target: { value } });

    const p = wrapper.find('p').text().trim();
    expect(p).toBe(value);
  });

  test('No debe postear nada con el submit', () => {
    wrapper.find('form').simulate('submit', {
      preventDefault() { }
    });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('Debe llamar setCategories y limpiar caja de texto', () => {
    const value = "GOku";

    // 1. Simular el input
    wrapper.find('input').simulate('change', { target: { value } });
    
    // 2. Simular el submit
    wrapper.find('form').simulate('submit', {
      preventDefault() { }
    });

    // 3. setCategories se debe haber llamado
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    // 4. Valor de input debe estar vacío
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
