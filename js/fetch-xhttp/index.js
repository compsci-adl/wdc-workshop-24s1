const searchForm = document.getElementById('search-form');
const charName = document.getElementById('char-name');
const charImage = document.getElementById('char-image');

searchForm.addEventListener('submit', async function (e) {
	e.preventDefault();

	const data = new FormData(e.target);
	const id = data.get('id');

	const res = await fetch('https://rickandmortyapi.com/api/character/' + id);
	const character = await res.json();

	charName.textContent = character.name;
	charImage.src = character.image;
});
