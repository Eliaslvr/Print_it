const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let arrowLeft = document.getElementById("arrow_left")
let arrowRight = document.getElementById("arrow_right")

// Div ou se trouve les points changement d'image
const dotsContainer = document.querySelector('.dots');
// Id selection complete banner
let banner = document.getElementById('banner')
// Image du banner 
const bannerImage = banner.querySelectorAll('.banner-img');


// Ajoutez un point pour chaque slide
slides.forEach((index) => {
	// Création de l'element div
  const dot = document.createElement('div');
  // Ajouter la class 'dot'
  dot.classList.add('dot');
  // Ajouter comme dernier element dans la div '.dots'
  dotsContainer.appendChild(dot);
});

numero = 0;

let divs = dotsContainer.getElementsByTagName('div')
let premiereDiv = divs[0]
let deuxiemeDiv = divs[1]
let troisiemeDiv = divs[2]
let quatriemeDiv = divs[3]

premiereDiv.classList.add("dot_selected")

arrowLeft.addEventListener("click", () => {
	console.log("Click gauche");
	// Array.from renvoi un tableaau
	Array.from(divs).forEach(element => {
		element.classList.remove("dot_selected")
	})
	if (numero==0) {
		numero = slides.length 
	} 
	divs[--numero].classList.add("dot_selected")
	bannerImage.forEach(item => {
		item.setAttribute("src", `./assets/images/slideshow/${slides[numero].image}`) 
		item.setAttribute("alt", `./assets/tagLine/slideshow/${slides[numero].tagLine}`) 
	})
})

arrowRight.addEventListener("click", () => {
	console.log("Click droit");
	Array.from(divs).forEach(element => {
		element.classList.remove("dot_selected")
	})
	if (numero >= slides.length -1) {
		numero = -1
	} 
	numero = numero +1
	divs[numero].classList.add("dot_selected")
	console.log(numero);
	bannerImage.forEach(item => {
		item.setAttribute("src", `./assets/images/slideshow/${slides[numero].image}`) 
		item.setAttribute("alt", `./assets/tagLine/slideshow/${slides[numero].tagLine}`) 
	})
})
