/*
 *  Text/Font Styles 
*/

// textBold
const textBold = document.getElementById("text-bold").addEventListener("click", function (e) {
    const classList = e.target.getAttribute("class");
    if (!classList.toLowerCase().includes("active")) {
        e.target.classList.add("active");
        addClass("font-bold");
    } else {
        e.target.classList.remove("active");
        removeClass("font-bold");
    }
});

// textItalic
const textItalic = document.getElementById("text-italic").addEventListener("click", function (e) {
    const classList = e.target.getAttribute("class");
    if (!classList.toLowerCase().includes("active")) {
        e.target.classList.add("active");
        addClass("italic");
    } else {
        e.target.classList.remove("active");
        removeClass("italic");
    }
});

// textUnderline
const textUnderline = document.getElementById("text-underline").addEventListener("click", function (e) {
    const classList = e.target.getAttribute("class");
    if (!classList.toLowerCase().includes("active")) {
        e.target.classList.add("active");
        addClass("underline");
    } else {
        e.target.classList.remove("active");
        removeClass("underline");
    }
});


/*
*   Alignments
*/

// Align left
document.getElementById("align-left").addEventListener("click", function (e) {
    addAlignment("left");
});

// Align center
document.getElementById("align-center").addEventListener("click", function (e) {
    addAlignment("center");
});

// Align justify
document.getElementById("align-justify").addEventListener("click", function (e) {
    addAlignment("justify");
});

// Align right
document.getElementById("align-right").addEventListener("click", function (e) {
    addAlignment("right");
});


/*
*   Font size and Color
*/

// fontSize
document.getElementById("font-size").addEventListener("keyup", function (e) {
    const fontSize = e.target.value + "px";
    addFontSize(fontSize);
});

// Color
document.getElementById("font-color").addEventListener("click", function (e) {
    const fontColor = e.target.value;
    addColor(fontColor);
});
