# ⏱️ [] TIMERS []

    setTimeout(() => {
        console.log("Waited 2 seconds");
    }, 2000);

    let intervalId = setInterval(() => {
        console.log("Every 1 second");
    }, 1000);

    // Stop it after 5 seconds
    setTimeout(() => clearInterval(intervalId), 5000);
