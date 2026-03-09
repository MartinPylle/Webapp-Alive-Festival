// Martin code

// Slideshow
// https://www.w3schools.com/howto/howto_js_slideshow.asp

// Variabel der holder styr på hvilket slide der vises
let slideIndex = 0;
// Variabel der gemmer timeren for automatisk slideshow
let timer; // add this

// Laver en funktion med navnet showSlides 
function showSlides() {
  // Henter alle elementer med klassen .mySlides
  let slides = document.querySelectorAll(".mySlides");
  // Henter alle elementer med klassen .dot
  let dots = document.querySelectorAll(".dot");
  
  // loop der skjuler alle slides

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Fjerner "active" klassen fra alle dots
  dots.forEach(d => d.classList.remove("active"));

  // Går videre til næste slide
  slideIndex++;
  // Hvis slideshow er nået til sidste slide, start forfra
  if (slideIndex > slides.length) { slideIndex = 1; }
  // Hvis slideIndex er mindre end 1, vis sidste slide
  if (slideIndex < 1) {slideIndex = slides.length; }
  if (slideIndex < 1) { slideIndex = slides.length; }

  // Viser den aktuelle slide
  slides[slideIndex - 1].style.display = "block";
  // Marker den tilhørende dot som aktiv
  dots[slideIndex -1].classList.add("active");
  // starter automatisk slideshow igen efter 10 sekunder 
  dots[slideIndex - 1].classList.add("active");

  timer = setTimeout(showSlides, 10000); // store the timer
}

// Funktion til at skifte slide ved klik på pileknapper

function plusSlides(n) {
  // Stopper den automatiske slideshow timer
  clearTimeout(timer);
  // ændre slideIndex afhængigt af om man går frem eller tilbage 
  slideIndex += n - 1;
  // kalder showSlides igen og opdatere slideshowet
  showSlides();
}

// Funktion til at vælge et bestemt slide via dots

function currentSlide(n) {
  // Stopper den automatiske slideshow timer
  clearTimeout(timer);
  // Sætter slideIndex til det valgte slide
  slideIndex = n - 1;
  // Opdaterer slideshowet
  showSlides();
}
// Starter slideshowet når siden loader
showSlides();


// Nyhedscards
// Oprettet en array med objekter inden i 
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
      first: "Programændring!"
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
      weekday: ""
    },
    picture: "/assets/img/thypisk_pizza.webp"
  },
];

// Fang det sted, hvor article skal vises 
const cardEL = document.querySelector(".cards")

// loop gennem news og indsæt en article for hver nyhed
// Der bruges DOM manipulation til at overskrive det eksisterende HTML 

// for hver nyhed. Data fra objekterne indsættes i HTML ved hjælp af 
// Template literals og vises derefter i websiden.
// Back ticks bruges til template literals og gør det muligt at skrive HTML over flere linjer og indsættes med variablen ${}
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
