function calculateAge() {
    const dobInput = document.getElementById("dob").value;
    if (dobInput) {
        const dob = new Date(dobInput);
        const today = new Date();

        let years = today.getFullYear() - dob.getFullYear();
        let months = today.getMonth() - dob.getMonth();
        let days = today.getDate() - dob.getDate();
        let hours = today.getHours() - dob.getHours();
        let minutes = today.getMinutes() - dob.getMinutes();
        let seconds = today.getSeconds() - dob.getSeconds();

        // Adjust for negative values in months, days, hours, minutes, and seconds
        if (months < 0) {
            months += 12;
            years--;
        }
        if (days < 0) {
            const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += lastMonth.getDate();
            months--;
        }
        if (hours < 0) {
            hours += 24;
            days--;
        }
        if (minutes < 0) {
            minutes += 60;
            hours--;
        }
        if (seconds < 0) {
            seconds += 60;
            minutes--;
        }

        // Detailed age output (years, months, days, hours, minutes, seconds)
        document.getElementById("detailed-age-output").innerHTML = `You are <strong>${years}</strong> years, <strong>${months}</strong> months, <strong>${days}</strong> days, <strong>${hours}</strong> hours, <strong>${minutes}</strong> minutes, and <strong>${seconds}</strong> seconds old.`;

        // Cumulative age output (years only)
        document.getElementById("cumulative-age-output").innerHTML = `You are <strong>${years}</strong> years old.`;
    } else {
        document.getElementById("detailed-age-output").innerText = "Please enter a valid date of birth.";
        document.getElementById("cumulative-age-output").innerText = "";
    }
}
