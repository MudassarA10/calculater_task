let result = document.getElementById("input-text");

let Calculate = (number) => {
    if (/\d[+\-*/]{2,}/.test(result.value)) {
        alert("Syntax Error: Consecutive operators not allowed");
    } else {
        result.value += number;
    }
}

let Result = () => {
    try {
        if (/(\+|\-|\*|\/){2,}/.test(result.value)) {
            throw new Error("Syntax Error: Consecutive operators not allowed");
        }

        result.value = eval(result.value);
    } catch (err) {
        alert(err.message);
    }
}

function cls() {
    result.value = " ";
}

function del() {
    result.value = result.value.slice(0, -1);
}

/********************/
document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key) || key === "." || ["+", "-", "*", "/"].includes(key)) {
        Calculate(key);
    } else if (key === "Enter") {
        Result();
    } else if (key === "blank" || key === "Delete") {
        cls();
    } else if (key === "Backspace") {
        del();
    }
});

/***************************/// */
// toggle js
let switchState = 0;

function toggleSwitch() {
    const toggleElement = document.querySelector('.toggle');

    switch (switchState) {

        case 0:
            toggleElement.style.transform = 'translateX(30px)';
            document.body.classList.toggle("secondCss");
            break;
        case 1:
            toggleElement.style.transform = 'translateX(60px)';
            document.body.classList.toggle("thirdCss");
            break;
        case 2:
            toggleElement.style.transform = 'translateX(30px)';
            document.body.classList.toggle("thirdCss");
            break;
        case 3:
            toggleElement.style.transform = 'translateX(0)';
            document.body.classList.remove("thirdCss", "secondCss");
            break;
    }

    switchState = (switchState + 1) % 4;
}

