let timer;
let messageCount = 0;

function startTimer() {

    // Якщо таймер уже запущений — зупиняємо його
    clearInterval(timer);

    messageCount = 0;

    timer = setInterval(function () {

        messageCount++;

        document.getElementById("timerMessage").textContent =
            "Повідомлення №" + messageCount;

        console.log("Повідомлення №" + messageCount);

        // Після 5 повідомлень зупиняємо інтервал
        if (messageCount === 5) {
            clearInterval(timer);

            document.getElementById("timerMessage").textContent =
                "Готово! Було 5 повідомлень.";
        }

    }, 1000);
}