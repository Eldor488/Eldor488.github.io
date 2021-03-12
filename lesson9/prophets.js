 const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

 fetch(requestURL)
 	.then(function (response) {
 		return response.json();
 	})
 	.then((jsonObject) => {
 		console.table(jsonObject); // temporary checking for valid response and data parsing
		 
		 const prophets = jsonObject['prophets'];
		 for (let i = 0; i < prophets.length; i++ ) {
			 // Creating the elements for the html 
			let card = document.createElement('section');
			let h2 = document.createElement('h2');
			let pd = document.createElement('p');
			let pp = document.createElement('p'); 
			let image = document.createElement('img'); 
            // Getting info from the JSON file and putting it on the html document.
			h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
			pd.textContent = "Date of Birth: " + prophets[i].birthdate; 
			pp.textContent = "Place of Birth: " + prophets[i].birthplace;
			image.setAttribute("src", prophets[i].imageurl);
			image.setAttribute(
			  "alt",
			  prophets[i].name +
				" " +
				prophets[i].lastname +
				" - " +
				prophets[i].order
			);
			card.appendChild(h2);
			card.appendChild(pd);
			card.appendChild(pp);
			card.appendChild(image);
			document.querySelector('div.cards').appendChild(card);
        }

 	});

;

