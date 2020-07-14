export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=DOmpKWUNkplLKMvI4uGcbZWgj1DEdZcs`;
  const getGifsFetch = await fetch(url);
  const { data } = await getGifsFetch.json();

  const gifsResult = data.map((img) => ({
    id: img.id,
    title: img.title || "Title image not exist",
    url: img.images?.downsized_medium.url,
  }));

  return gifsResult;
};
