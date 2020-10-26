import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas Unitarias de <useFetcgGifs />', () => {
  test('Debe retornar el estado inicial ', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("One Puch"));
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test('Debe retornar un arreglo de imágenes y el loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("One Puch"));
    
    await waitForNextUpdate();
    
    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBeFalsy();
  });
});
