// Her er en arrow function der lytter efter om hjertet er toggled (tilføjet til favoritter).
// Hvis den bliver trykket på (fjernet) bliver den fjernet fra DOM.

document.querySelectorAll('.fa-heart').forEach(hjerte => {
    // Herover finder jeg classes der har .fa-hear (i Font Awesome).
    hjerte.addEventListener('click', function () {
        // Herover er der en EventListener der lytter efter click, hvis et klik bliver lavet køre funktionen nedenunder.
        this.classList.toggle('fa-regular');
        // Herover er der (this) som referere til det specifikke hjerte ('fa-regular').
        if (this.classList.contains('fa-regular')) {
            // Herover spørger den om true eller false på om fa-regular er der ved hjælp af "contains".
            this.closest('.artistCard').style.display = 'none';
            // Herover finder den det tætteste artistCard og giver det style.display = 'none'; og dermed fjerne det fra DOM.
        }
    })
});

// Jeg ville gerne have lavet sådan at favoritterne blev importeret fra program siden, men jeg føler ikke at jeg kan det endnu.