let animationInterval;
let position = 0;
let size = 50;

function startAnimation() {

    // Не дозволяємо запускати кілька інтервалів одночасно
    clearInterval(animationInterval);

    animationInterval = setInterval(function () {

        position += 5;
        size += 2;

        // Якщо елемент дійшов до краю — починаємо спочатку
        if (position > 600) {
            position = 0;
            size = 50;
        }

        document.getElementById("square").style.left =
            position + "px";

        document.getElementById("square").style.width =
            size + "px";

        document.getElementById("square").style.height =
            size + "px";


        // Другий елемент рухається в іншу сторону
        document.getElementById("square2").style.left =
            (600 - position) + "px";

    }, 50);
}


function stopAnimation() {
    clearInterval(animationInterval);
}
