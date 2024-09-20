const text = document.querySelector(".sec_text");

const textLoader = () => {
    setTimeout(() => {
        text.textContent = "Estudiante"
    }, 0);
    setTimeout(() => {
        text.textContent = "Desarrollador Web";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Developer FullStack";
    }, 8000);
}

textLoader()
setInterval(textLoader, 12000);