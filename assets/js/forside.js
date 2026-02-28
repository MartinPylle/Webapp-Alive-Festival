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
  if (slideIndex < 1) {slideIndex = slides.length; }

  slides[slideIndex - 1].style.display = "block";

  timer = setTimeout(showSlides, 10000); // store the timer
}

function plusSlides(n) {
  clearTimeout(timer); // cancel auto-advance
  slideIndex += n - 1;
  showSlides();
}

showSlides();


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
