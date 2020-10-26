import { getGifs } from '../../helpers/getGifs';

describe('Pruebas unitarias de getGifs()', () => {
  test('Debe retornar 10 imágenes ', async () => {
    const searchImgs = await getGifs('Goku');
    expect(searchImgs.length).toBe(10);
  });

  test('No Debe retornar imágenes ', async () => {
    const searchImgs = await getGifs('');
    expect(searchImgs.length).toBe(0);
  });
});