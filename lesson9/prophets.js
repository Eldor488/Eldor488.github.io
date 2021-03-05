const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

fetch(requestURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject)  {
		const prophets = jsonObject['prophets'];

		console.table(jsonObject); // temporary checking for valid response and data parsing
		for(let i = 0; i < prophets.length; i++){
			let card = document.createElement('section');
			let h2 = document.createElement('h2');
			let par = document.createElement('p');
			let par2 = document.createElement('p');
			let pic = document.createElement('img');

			h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
			par.textContent = 'Date of Birth: ' + prophets[i].birthdate;
			par2.textContent = 'Place of Birth: ' + prophets[i].birthplace; 
			pic.setAttribute('src', prophets[i].imageurl);
			pic.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);

			card.appendChild(h2);
			card.appendChild(par);
			card.appendChild(par2);
			card.appendChild(pic);

			document.querySelector('div.cards').appendChild(card);
		}
	});
