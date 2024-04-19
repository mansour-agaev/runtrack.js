$(document).ready(function () {
    $('#melanger').click(function () {
        var images = $('#arc-en-ciel img');
        var shuffledImages = shuffleArray(images.toArray());
        $('#arc-en-ciel').empty().append(shuffledImages);
        $('#message').text('');
    });

    // Fonction pour valider l'ordre des images
    $('#valider').click(function () {
        var images = $('#arc-en-ciel img');
        var ordered = true;

        // Vérifier si les images sont dans l'ordre attendu
        images.each(function (index) {
            var expectedIndex = index + 1;
            var currentIndex = parseInt($(this).attr('alt').replace('Image ', ''));
            if (currentIndex !== expectedIndex) {
                ordered = false;
                return false; // Sortir de la boucle each si une image est mal placée
            }
        });

        // Afficher le message en fonction du résultat
        if (ordered) {
            $('#message').text('Vous avez gagné').css('color', 'green');
        } else {
            $('#message').text('Vous avez perdu').css('color', 'red');
        }
    });

    // Fonction pour mélanger un tableau aléatoirement
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
});

