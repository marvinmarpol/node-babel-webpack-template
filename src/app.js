console.log('Hello World');

const getData = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
};

getData('https://jsonplaceholder.typicode.com/posts');
