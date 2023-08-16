// TextArea [Global]
var textArea = document.getElementById("text-area");

// Add className to the textArea
function addClass(className) {
    textArea.classList.add(className);
}

// Remove className from the textArea
function removeClass(className) {
    textArea.classList.remove(className);
}

// Alignment
function addAlignment(align) {
    textArea.style.textAlign = align;
}

// fontSize
function addFontSize(fontSize) {
    textArea.style.fontSize = fontSize;
}

// Color
function addColor(fontColor) {
    textArea.style.color = fontColor;
}