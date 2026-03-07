
// En function der arrow function der indeholder en toggle function som holder øje med 'click' (addEventListener).
document.querySelectorAll('.fa-heart').forEach(hjerte => {
    hjerte.addEventListener('click', function () {
        // Herunder er der selve toggle function.
        // Den skifter udseende fra at være fuld til at være hul ved hjælp af classes i Font Awesomes stylesheet som er linket til HTML dokumentet.
        this.classList.toggle('fa-regular');
        this.classList.toggle('fa-solid');
    });
});

// Jeg ville gerne have lavet sådan at favoritterne blev importeret fra program siden, til favorit.html. Jeg føler dog ikke at jeg kan det endnu.