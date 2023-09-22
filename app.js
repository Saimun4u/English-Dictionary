const inputEl = document.getElementById('input');

async function fetchAPI(word) {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const response = await fetch(url).then((res) => res.json());
  console.log(response);
}

inputEl.addEventListener('keyup', (e) => {
  if (e.target.value && e.key === 'Enter') fetchAPI(e.target.value);
});
