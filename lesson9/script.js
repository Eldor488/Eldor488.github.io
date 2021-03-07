function toggleMenu() { 
    document.getElementById("list-items").classList.toggle("hide"); 
   }
   
   
   function pancakeBanner() {
       let d = new Date();
       let n = d.getDay(); 
       
       if (n == 5) {
           document.getElementById("pancakes-saturday").style.display = "block";
       } else {
           document.getElementById("pancakes-saturday").style.display = "none";
       } 
   }
   
    pancakeBanner(); 
   
    let imagesToLoad = document.querySelectorAll('img[data-src]'); 
   
   const loadImages = (image) => {
     image.setAttribute('src', image.getAttribute('data-src')); 
   
     image.onload = () => {
       image.removeAttribute('data-src');
     };
   }; 
   
   if('IntersectionObserver' in window) {
     const observer = new IntersectionObserver((items, observer) => {
       items.forEach((item) => {
         if(item.isIntersecting) {
           loadImages(item.target);
           observer.unobserve(item.target);
         }
       });
     });
     imagesToLoad.forEach((img) => {
       observer.observe(img);
     });
   } else {
     imagesToLoad.forEach((img) => {
       loadImages(img);
     });
   }


   /**
    JSON FILE
    */
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towndata = jsonObject["towns"];

        // const preston = towndata.find(town => town.name == "Preston");
        // const sodaSprings = towndata.find(town => town.name == "Soda Springs");
        // const fishHaven = towndata.find(town => town.name == "Fish Haven");

        const filteredtowns = [
            towndata.find((town) => town.name == "Preston"),
            towndata.find((town) => town.name == "Soda Springs"),
            towndata.find((town) => town.name == "Fish Haven"),
        ];

        filteredtowns.forEach((town) => {
            let name = document.createElement("h2");
            let motto = document.createElement("p");
            let yearFounded = document.createElement("p");
            let currentPopulation = document.createElement("p");
            let averageRainfall = document.createElement("p");
            let textWrapper = document.createElement("div");
            let titleWrapper = document.createElement("div");
            let infoWrapper = document.createElement("div");
            let photo = document.createElement("img");

            name.textContent = `${town.name}`;
            motto.textContent = `${town.motto}`;
            motto.setAttribute("class", "motto");
            yearFounded.textContent = `Year Founded: ${town.yearFounded}`;
            currentPopulation.textContent = `Current Population: ${town.currentPopulation}`;
            averageRainfall.textContent = `Average Rainfall: ${town.averageRainfall}`;

            photo.setAttribute("src", `images/${town.photo}`);
            photo.setAttribute("alt", town.name);

            titleWrapper.appendChild(name);
            titleWrapper.appendChild(motto);
            infoWrapper.appendChild(yearFounded);
            infoWrapper.appendChild(currentPopulation);
            infoWrapper.appendChild(averageRainfall);

            textWrapper.appendChild(titleWrapper);
            textWrapper.appendChild(infoWrapper);

            let selector = "";
            switch (town.name) {
                case "Preston":
                    selector = "preston";
                    break;
                case "Soda Springs":
                    selector = "soda-springs";
                    break;
                case "Fish Haven":
                    selector = "fish-haven";
                    break;
            }

            townSection = document.querySelector(`section#${selector}`);

            townSection.appendChild(textWrapper);
            townSection.appendChild(photo);
        });
    });