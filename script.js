function toggleSection(id) {
    const section = document.getElementById(id);
    section.style.display = section.style.display === "block" ? "none" : "block";
}

function toggleModule(titleElem) {
    const detailElem = titleElem.nextElementSibling;
    detailElem.classList.toggle('show');
}
