// Melanie's kode her

let foodData = [

    // Bryggen
    {picture: "assets/img/bryggen.webp", title: "Bryggen"},

    // Den grønne fe
 {picture: "assets/img/mad_groen_fe.webp", title: "Den Grønne Fe"},

    // Gadens Gastronomer
 {picture: "assets/img/gadens_gastronomer.webp", title: "Gadens Gastronomer"},

    // Mikuna
 {picture: "assets/img/mikuna.webp", title: "Mikuna"},

    // Salke
 {picture: "assets/img/salke.webp", title: "Salke"},

    // Streetbites Thai
 {picture: "assets/img/streetbites_thai.webp", title: "StreetBites Thai"},

    // Thypisk pizza
 {picture: "assets/img/thypisk_pizza.webp", title: "Thypisk Pizza"},

    // The taco truck
 {picture: "assets/img/taco.webp", title: "The Taco Truck"},

];

let drinkData = [
    // Bryghusbar
    {picture: "assets/img/bryghus_beer.webp", title: "BryghusBar"},

    // Bærbar
    {picture: "assets/img/baerbar.webp", title: "Bærbar"},

     // Cocktailbar
    {picture: "assets/img/cocktailbar.webp", title: "Cocktailbar"},

     // Havebar
    {picture: "assets/img/havebar.webp", title: "Havebar"},

     // Skovbar
    {picture: "assets/img/skovbar.webp", title: "Skovbar"},

    // Skovbar
    {picture: "assets/img/vadebar.webp", title: "Vadebar"},

     // Skovbar
    {picture: "assets/img/vin_whiskey_lounge.webp", title: "Vin- og Whiskey loungen"},
]

let cards = document.querySelector(".madcards")

// Alle individuelle madcards kommer gennem her
    foodData.forEach(function(card) {
        
        // Her opretter jeg en article
        let madArticle = document.createElement("article")

        // Giver den klassen madcard
        madArticle.classList.add("madcard")

        // Her får jeg den til at ændre baggrundsbilledet i mine articles for hvert loop
        madArticle.style.backgroundImage = `url(${card.picture})`

        // Her laver jeg titlen til hvert card og gør sådan de skifter for hvert 
        let madTitle = document.createElement("h3");

        madTitle.textContent = card.title;

        madArticle.appendChild(madTitle)
        cards.appendChild(madArticle)
    });

    // Alle individuelle drikkecards
let cards2 = document.querySelector(".drikkecards")

     drinkData.forEach(function(card2) {
        
        // Her opretter jeg en article
        let drinkArticle = document.createElement("article")

        // Giver den klassen madcard
        drinkArticle.classList.add("drinkcard")

        // Her får jeg den til at ændre baggrundsbilledet i mine articles for hvert loop
        drinkArticle.style.backgroundImage = `url(${card2.picture})`

        // Her laver jeg titlen til hvert card og gør sådan de skifter for hvert 
        let drinkTitle = document.createElement("h3");

        drinkTitle.textContent = card2.title;
        drinkArticle.appendChild(drinkTitle)
        cards2.appendChild(drinkArticle)
    });


// Martin code

// Slideshow

let slideIndex = 0;
let timer; // add this

function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  slides[slideIndex - 1].style.display = "block";

  timer = setTimeout(showSlides, 3000); // store the timer
}

function plusSlides(n) {
  clearTimeout(timer); // cancel auto-advance
  slideIndex += n - 1;
  showSlides();
}


// Nyhedscards

const news = [
  {
    title: {
      first: "Sceneændring!"
    },
    artist: {
      name: "Døtre"
    },
    changes: {
      textinfo: "Spiller på Skovscenen!"
    },
    date: {
      weekday: "Lørdag kl. 15:00"
    },
    picture: "/assets/img/døtre.webp"
  },

    {
    title: {
      first: "Programændring"
    },
    artist: {
      name: "Wicky"
    },
    changes: {
      textinfo: "Spiller på Havnescenen"
    },
    date: {
      weekday: "Fredag kl. 21:30"
    },
    picture: "/assets/img/wicky.webp"
  },

    {
    title: {
      first: "Mad og Drikke"
    },
    artist: {
      name: "Thypisk Pizza"
    },
    changes: {
      textinfo: "Thypisk Pizza er midlertidligt lukket grundet vand skade"
    },
    date: {
      weekday: "Fredag"
    },
    picture: "/assets/img/thypisk_pizza.webp"
  },
];

// Fang det sted, hvor article skal vises

const cardEL = document.querySelector(".cards")

// loop gennem news og indsæt en article for hver nyhed

news.forEach(function(nyhed) {
   cardEL.innerHTML += `
   		<article class="card">
			<img src="${nyhed.picture}" alt="Knustner Døtre, sceneændring til Skovscenen lørdag kl. 15:00">
			<div class="card-info">
				<h2>${nyhed.title.first}</h2>
				<h4>${nyhed.artist.name}</h4>
				<p>${nyhed.changes.textinfo}</p>
				<p>${nyhed.date.weekday}</p>
			</div>
		</article>`;
});
