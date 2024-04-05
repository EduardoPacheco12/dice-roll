document.getElementById("dice-type").addEventListener("change", (value) => {
    let selectedOptionId = document.getElementById("dice-type").value;

    if (selectedOptionId === "d4") {
        let diceImages = document.querySelectorAll(".box img");
        diceImages.forEach((image) => {
            if(image.alt !== "dado-d4") {
                image.style.display = "none";
            }
            if(image.alt === "dado-d4") {
                image.style.display = "inline-block";
            }
        });
    }

    if (selectedOptionId === "d6") {
        let diceImages = document.querySelectorAll(".box img");
        diceImages.forEach((image) => {
            if(image.alt !== "dado-d6") {
                image.style.display = "none";
            }
            if(image.alt === "dado-d6") {
                image.style.display = "inline-block";
            }
        });
    }

    if (selectedOptionId === "d8") {
        let diceImages = document.querySelectorAll(".box img");
        diceImages.forEach((image) => {
            if(image.alt !== "dado-d8") {
                image.style.display = "none";
            }
            if(image.alt === "dado-d8") {
                image.style.display = "inline-block";
            }
        });
    }

    if (selectedOptionId === "d10") {
        let diceImages = document.querySelectorAll(".box img");
        diceImages.forEach((image) => {
            if(image.alt !== "dado-d10") {
                image.style.display = "none";
            }
            if(image.alt === "dado-d10") {
                image.style.display = "inline-block";
            }
        });
    }

    if (selectedOptionId === "d12") {
        let diceImages = document.querySelectorAll(".box img");
        diceImages.forEach((image) => {
            if(image.alt !== "dado-d12") {
                image.style.display = "none";
            }
            if(image.alt === "dado-d12") {
                image.style.display = "inline-block";
            }
        });
    }

    if (selectedOptionId === "d20") {
        let diceImages = document.querySelectorAll(".box img");
        diceImages.forEach((image) => {
            if(image.alt !== "dado-d20") {
                image.style.display = "none";
            }
            if(image.alt === "dado-d20") {
                image.style.display = "inline-block";
            }
        });
    }

    if (selectedOptionId === "d100") {
        let diceImages = document.querySelectorAll(".box img");
        diceImages.forEach((image) => {
            if(image.alt !== "dado-d20") {
                image.style.display = "none";
            }
            if(image.alt === "dado-d20") {
                image.style.display = "inline-block";
            }
        });
    }
});