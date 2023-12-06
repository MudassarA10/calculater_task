let result = document.getElementById("input-text");

let Calculate = (number) => {
    // Check for consecutive operators before appending
    if (/\d[+\-*/]{2,}/.test(result.value)) {
        alert("Syntax Error: Consecutive operators not allowed");
    } else {
        result.value += number;
    }
}

let Result = () => {
    try {
        // Check for consecutive operators in the entire expression
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

/**************************** */
let click = document.getElementById("click")

click.addEventListener('click', () => {
    // console.log(click);
    document.body.classList.toggle("secondCss");
})