const inputEl = document.getElementById('input');
const infoTextEl = document.getElementById('info-text');

async function fetchAPI(word) {
  infoTextEl.innerText = `Searching for the meaning of the word "${word}"`;

  try {
    infoTextEl.style.display = 'block';

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const response = await fetch(url).then((res) => res.json());
    infoTextEl.style.display = 'none';
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

inputEl.addEventListener('keyup', (e) => {
  if (e.target.value && e.key === 'Enter') fetchAPI(e.target.value);
});
