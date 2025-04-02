// Updated manually

function toggleContent(element) {
    var content = element.querySelector(".content");
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}
