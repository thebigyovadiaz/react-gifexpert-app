import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas Unitarias de <GifExpertApp />', () => {
  test('Debe generarse el snapshot del componente', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar una lista de categorias', () => {
    const defaultCategories = ["One Punch", "Dragon Ball Z"];
    const wrapper = shallow(<GifExpertApp defaultCategories={defaultCategories} />)
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(defaultCategories.length);
  });
});