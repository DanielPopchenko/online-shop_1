const baseUrl = 'http://localhost:8000/items';

export const fetchData = async (setData) => {
  const response = await fetch(baseUrl);
  const fetchedData = await response.json();

  setData(fetchedData);
};

export const fetchShowDetails = async (itemId, setItem) => {
  const response = await fetch(`${baseUrl}/${itemId}`);
  const fetchedData = await response.json();

  setItem(fetchedData);
};

// export const fetchShowWithName = (searchQuery) => {
//   return fetch(`${baseUrl}//search/shows?q=:${searchQuery}`)
//     .then((res) => res.json())
//     .then((entries) => entries.map((entry) => entry.show));
// };
