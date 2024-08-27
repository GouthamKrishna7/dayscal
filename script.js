function startCountdown() {
    const dateInput = document.getElementById('date').value;
    const timeInput = document.getElementById('time').value;

    if (!dateInput || !timeInput) {
        alert("Please enter both date and time.");
        return;
    }

    const targetDateTime = new Date(`${dateInput}T${timeInput}`);
    
    const countdown = setInterval(() => {
        const now = new Date();
        const timeDiff = targetDateTime - now;

        if (timeDiff <= 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = "<p>Countdown finished!</p>";
            return;
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = `Days: ${days}`;
        document.getElementById('hours').innerHTML = `Hours: ${hours}`;
        document.getElementById('minutes').innerHTML = `Minutes: ${minutes}`;
        document.getElementById('seconds').innerHTML = `Seconds: ${seconds}`;
    }, 1000);
}