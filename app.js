

function getZodiacSign(month, day) {
    let sign;

    switch (month) {
        case 1:
            sign = day < 20 ? "Capricorn" : "Aquarius";
            break;
        case 2:
            sign = day < 19 ? "Aquarius" : "Pisces";
            break;
        case 3:
            sign = day < 21 ? "Pisces" : "Aries";
            break;
        case 4:
            sign = day < 20 ? "Aries" : "Taurus";
            break;
        case 5:
            sign = day < 21 ? "Taurus" : "Gemini";
            break;
        case 6:
            sign = day < 21 ? "Gemini" : "Cancer";
            break;
        case 7:
            sign = day < 23 ? "Cancer" : "Leo";
            break;
        case 8:
            sign = day < 23 ? "Leo" : "Virgo";
            break;
        case 9:
            sign = day < 23 ? "Virgo" : "Libra";
            break;
        case 10:
            sign = day < 23 ? "Libra" : "Scorpio";
            break;
        case 11:
            sign = day < 22 ? "Scorpio" : "Sagittarius";
            break;
        case 12:
            sign = day < 22 ? "Sagittarius" : "Capricorn";
            break;
        default:
            sign = "Invalid month";
            break;
    }

    return sign;
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("zodiacForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const month = parseInt(document.getElementById("month").value);
        const day = parseInt(document.getElementById("day").value);
        const result = getZodiacSign(month, day);
        document.getElementById("result").innerText = "Your Zodiac sign is: " + result;
    });
});