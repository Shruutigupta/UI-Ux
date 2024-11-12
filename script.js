document.addEventListener("DOMContentLoaded", function() {
    const acToggle = document.getElementById("acToggle");
    const acTemp = document.getElementById("acTemp");
    const fanToggle = document.getElementById("fanToggle");
    const fanSpeed = document.getElementById("fanSpeed");
    const lightToggle = document.getElementById("lightToggle");
    const lightBrightness = document.getElementById("lightBrightness");
    const lightColor = document.getElementById("lightColor");

    acToggle.addEventListener("change", () => {
        if (acToggle.checked) {
            console.log("Air Conditioner is ON. Temperature set to", acTemp.value);
        } else {
            console.log("Air Conditioner is OFF");
        }
    });

    acTemp.addEventListener("input", () => {
        console.log("AC Temperature:", acTemp.value);
    });

    fanToggle.addEventListener("change", () => {
        if (fanToggle.checked) {
            console.log("Fan is ON. Speed set to", fanSpeed.value);
        } else {
            console.log("Fan is OFF");
        }
    });

    fanSpeed.addEventListener("input", () => {
        console.log("Fan Speed:", fanSpeed.value);
    });

    lightToggle.addEventListener("change", () => {
        if (lightToggle.checked) {
            console.log("Light is ON. Brightness set to", lightBrightness.value, "Color set to", lightColor.value);
        } else {
            console.log("Light is OFF");
        }
    });

    lightBrightness.addEventListener("input", () => {
        console.log("Light Brightness:", lightBrightness.value);
    });

    lightColor.addEventListener("input", () => {
        console.log("Light Color:", lightColor.value);
    });
});
