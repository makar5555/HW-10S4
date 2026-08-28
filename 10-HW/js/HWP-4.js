function startCountdown() {

    let seconds = Number(
        document.getElementById("secondsInput").value
    );

    if (seconds <= 0) {
        alert("Введіть число більше 0!");
        return;
    }

    document.getElementById("countdownMessage").textContent =
        "Очікування " + seconds + " секунд...";

    setTimeout(function () {

        document.getElementById("countdownMessage").textContent =
            "Час вийшов! ⏰";

        alert("Встановлений час минув!");

    }, seconds * 1000);
}
