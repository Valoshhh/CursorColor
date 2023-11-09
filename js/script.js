const redRange = document.getElementById('redRange');
const greenRange = document.getElementById('greenRange');
const blueRange = document.getElementById('blueRange');
const redValueSpan = document.getElementById('redValue');
const greenValueSpan = document.getElementById('greenValue');
const blueValueSpan = document.getElementById('blueValue');
const shadowRange = document.getElementById('shadowRange');
const shadowValueSpan = document.getElementById('shadowValue');
const colorSlider = document.querySelector('.color-slider');
const colorDisplay = document.querySelector('.colorDisplay')
const copyButton = document.getElementById('copyButton');


updateBackgroundColor();

        redRange.addEventListener('input', updateBackgroundColor);
        greenRange.addEventListener('input', updateBackgroundColor);
        blueRange.addEventListener('input', updateBackgroundColor);
        shadowRange.addEventListener('input', updateShadowSize);
        colorDisplay.addEventListener('input', updateBackgroundColor);
        copyButton.addEventListener('click', copyBackgroundColor);

        function updateBackgroundColor() {
            const redValue = redRange.value;
            const greenValue = greenRange.value;
            const blueValue = blueRange.value;

            const backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`;
            document.body.style.backgroundColor = backgroundColor;
            // const colorDisplayy = colorDisplay.value;  
            colorDisplay.textContent = `rgb (${redValue}, ${greenValue}, ${blueValue} )`;

            redValueSpan.textContent = redValue;
            greenValueSpan.textContent = greenValue;
            blueValueSpan.textContent = blueValue;
    
        }


        function updateShadowSize() {
            const shadowSize = shadowRange.value;
            shadowValueSpan.textContent = shadowSize;

            const boxShadowColor = `rgba(22, 22, 22, 0.514)`;
            colorSlider.style.boxShadow = `5px 5px ${shadowSize}px ${boxShadowColor}`;
        }

        function copyBackgroundColor() {
            // Récupère la couleur générée en fonction des curseurs de couleur
            const redValue = redRange.value;
            const greenValue = greenRange.value;
            const blueValue = blueRange.value;
            const backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`;
        
            // Utilise l'API Clipboard pour écrire la couleur de fond dans le presse-papiers
            navigator.clipboard.writeText(backgroundColor).then(function() {
                // En cas de succès, met à jour le texte du bouton pour indiquer que la couleur a été copiée
                copyButton.textContent = "Copié !";
            }).catch(function(err) {
                // En cas d'erreur, affiche un message d'erreur dans la console
                console.error('Erreur lors de la copie : ', err);
            });
        }        


