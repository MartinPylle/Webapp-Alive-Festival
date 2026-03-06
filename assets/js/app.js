






// Melanie's kode her

let foodData = [

    // Bryggen 
    { picture: "assets/img/bryggen.webp", title: "Bryggen", link: "brygge.html" },

    // Den grønne fe 
    { picture: "assets/img/mad_groen_fe.webp", title: "Den Grønne Fe", link: "den_groenne_fe.html" },

    // Gadens Gastronomer
    { picture: "assets/img/gadens_gastronomer.webp", title: "Gadens Gastronomer", link: "gadens_gastronomer.html" },

    // Mikuna
    { picture: "assets/img/mikuna.webp", title: "Mikuna", link: "mikuna.html" },

    // Salke
    { picture: "assets/img/salke.webp", title: "Salke", link: "salke.html" },

    // Streetbites Thai
    { picture: "assets/img/streetbites_thai.webp", title: "StreetBites Thai", link: "street_bites.html" },

    // Thypisk pizza
    { picture: "assets/img/thypisk_pizza.webp", title: "Thypisk Pizza", link: "thypisk_pizza.html" },

    // The taco truck
    { picture: "assets/img/taco.webp", title: "The Taco Truck", link: "taco.html" },

];

let drinkData = [
    // Bryghusbar
    { picture: "assets/img/bryghus_beer.webp", title: "BryghusBar" },

    // Bærbar
    { picture: "assets/img/baerbar.webp", title: "Bærbar" },

    // Cocktailbar
    { picture: "assets/img/cocktailbar.webp", title: "Cocktailbar" },

    // Havebar
    { picture: "assets/img/havebar.webp", title: "Havebar" },

    // Skovbar
    { picture: "assets/img/skovbar.webp", title: "Skovbar" },

    // Skovbar
    { picture: "assets/img/vadebar.webp", title: "Vadebar" },

    // Skovbar
    { picture: "assets/img/vin_whiskey_lounge.webp", title: "Vin- og Whiskey loungen" },
]

let cards = document.querySelector(".madcards")

// Alle individuelle madcards kommer gennem her
foodData.forEach(function (card) {

    // Her opretter jeg et link og siger at for hver card skal den linke til den sti jeg har lavet oppe i arrays
    let link = document.createElement("a");
    link.href = card.link;

    // Her opretter jeg en article
    let madArticle = document.createElement("article");

    // Giver den klassen madcard
    madArticle.classList.add("madcard");

    // Baggrundsbilledet for hvert card
    madArticle.style.backgroundImage = `url(${card.picture})`;

    // Titel
    let madTitle = document.createElement("h3");
    madTitle.textContent = card.title;

    //   Her får jeg mad cards ud i DOM
    madArticle.appendChild(madTitle);
    link.appendChild(madArticle);
    cards.appendChild(link);
});

// Alle individuelle drikkecards
let cards2 = document.querySelector(".drikkecards")

drinkData.forEach(function (card2) {

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
