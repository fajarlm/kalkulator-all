function appendValue(value){
    document.getElementById("display").value += value;
}

function clearDisplay(){
    document.getElementById("display").value = '';
}

function calculatePercentage() {
    let display = document.getElementById('display');
    display.value = parseFloat(display.value) / 100;
}

function calculate(){
    const display = document.getElementById("display");
    try{
        display.value = eval(display.value);
    }catch{
        display.value = 'Error';
    }
}

function deleteLastCharacter() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}


// Event Listener untuk menangkap input keyboard
document.addEventListener("keydown", function(event) {
    const key = event.key;
    const display = document.getElementById("display");

    if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        deleteLastCharacter();
    } else if (key === "Delete") {
        clearDisplay();
    } else if (key === "%") {
        calculatePercentage();
    } else if (key === "e"){
        appendValue(Math.E.toString());
    }
});