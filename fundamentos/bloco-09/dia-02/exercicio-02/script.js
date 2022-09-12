const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => console.log(error));

  return coins;
};

const fetchCurrencies = async () => {
  const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest';
  const endPoint = '/currencies/usd.min.json';
  const url = baseUrl.concat(endPoint);

  const currencies = fetch(url)
    .then((response) => response.json())
    .then((data) => data.usd)
    .catch((error) => console.log(error));

  return currencies;
};

const setCoins = async () => {
  const coinsList = document.querySelector('#coins-list');

  try {
    const coins = await fetchCoins();
    const currency = await fetchCurrencies();

    coins
      .filter((_, amount) => amount < 10)
      .map((coin) => {
        const { name, symbol, priceUsd } = coin;
        const priceBrl = Number(priceUsd) * currency.brl;

        coinsList.innerHTML += `<li>${name} (${symbol}): R$ ${priceBrl.toFixed(2)}</li>`;
      });
  } catch (error) {
    return (error)
      ? coinsList.innerHTML = 'Servidor fora do ar, atualize a pagina novamente... :('
      : null;
  }
};

window.onload = () => {
  setCoins();
};
