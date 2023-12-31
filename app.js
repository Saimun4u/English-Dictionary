const inputEl = document.getElementById('input');
const infoTextEl = document.getElementById('info-text');
const meaningContainerEl = document.getElementById('meaning-container');
const titleEl = document.getElementById('title');
const meaningEl = document.getElementById('meaning');
const audioEl = document.getElementById('audio');

async function fetchAPI(word) {
  infoTextEl.innerText = `Searching for meaning of the word "${word}"`;

  try {
    infoTextEl.style.display = 'block';
    meaningContainerEl.style.display = 'none';
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const response = await fetch(url).then((res) => res.json());
    if (response.title) {
      infoTextEl.style.display = 'none';
      meaningContainerEl.style.display = 'block';
      titleEl.textContent = word;
      meaningEl.textContent = 'Meaning is not available';
      audioEl.style.display = 'none';
    } else {
      infoTextEl.style.display = 'none';
      meaningContainerEl.style.display = 'block';
      audioEl.style.display = 'inline-flex';
      titleEl.textContent = response[0].word;
      meaningEl.textContent =
        response[0].meanings[0].definitions[0]['definition'];
      audioEl.src = response[0].phonetics[0].audio;
    }
  } catch (error) {
    infoTextEl.innerText = `Ouch...there's a snag. Try again later`;
  }
}

inputEl.addEventListener('keyup', (e) => {
  if (e.target.value && e.key === 'Enter') fetchAPI(e.target.value);
});
