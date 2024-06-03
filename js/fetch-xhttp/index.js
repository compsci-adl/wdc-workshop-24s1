const searchForm = document.getElementById('search-form');
const charName = document.getElementById('char-name');
const charImage = document.getElementById('char-image');

searchForm.addEventListener('submit', function (e) {
	e.preventDefault();

	const data = new FormData(e.target);
	const id = data.get('id');

	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			const character = JSON.parse(this.responseText);
			charName.textContent = character.name;
			charImage.src = character.image;
		}
	};
	xhttp.open('GET', 'https://rickandmortyapi.com/api/character/' + id, true);
	xhttp.send();
});
