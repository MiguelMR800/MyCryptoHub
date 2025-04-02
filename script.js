
function setLanguage(lang) {
    document.querySelectorAll('[data-en]').forEach(el => {
        el.innerText = el.getAttribute('data-' + lang);
    });
}
