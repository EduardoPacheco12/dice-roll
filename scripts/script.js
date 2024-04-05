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

function roll() {
    let selectedDiceNumber = Number(document.getElementById("dice-number").value);
    let selectedDiceType = document.getElementById("dice-type").value;
    let message = "";

    for(let i = 0; i < selectedDiceNumber; i++) {
        let randomNumber = Math.random();

        if( selectedDiceType === "d4") {
            let number = Math.floor(randomNumber * 4) + 1;
            message += `Valor do dado ${i + 1}: ${number}\n`;
        }
        if( selectedDiceType === "d6") {
            let number = Math.floor(randomNumber * 6) + 1;
            message += `Valor do dado ${i + 1}: ${number}\n`;
        }
        if( selectedDiceType === "d8") {
            let number = Math.floor(randomNumber * 8) + 1;
            message += `Valor do dado ${i + 1}: ${number}\n`;
        }
        if( selectedDiceType === "d10") {
            let number = Math.floor(randomNumber * 10) + 1;
            message += `Valor do dado ${i + 1}: ${number}\n`;
        }
        if( selectedDiceType === "d12") {
            let number = Math.floor(randomNumber * 12) + 1;
            message += `Valor do dado ${i + 1}: ${number}\n`;
        }
        if( selectedDiceType === "d20") {
            let number = Math.floor(randomNumber * 20) + 1;
            message += `Valor do dado ${i + 1}: ${number}\n`;
        }
        if( selectedDiceType === "d100") {
            let number = Math.floor(randomNumber * 100) + 1;
            message += `Valor do dado ${i + 1}: ${number}\n`;
        }
    }
    alert(message);

}