const jokeContainer = document.querySelector('#jokeContainer');

function appendJoke(joke) {
  jokeContainer.innerHTML = joke;
}

const fetchJoke = async (callback) => {
  const API_URL = 'https://icanhazdadjoke.com/';
  const object = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  try {
    const response = await fetch(API_URL, object);
    const data = await response.json();
    callback(data);
  } catch (error) {
    callback(error);
  }
};

window.onload = () => fetchJoke((data) => appendJoke(data.joke));
