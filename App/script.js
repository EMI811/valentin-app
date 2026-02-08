// CAMBIAR PANTALLAS
function openScreen(id) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.add("hidden");
    });
    document.getElementById(id).classList.remove("hidden");
}

// DIARIO
const diaryText = document.getElementById("diaryText");
const status = document.getElementById("status");

const savedDiary = localStorage.getItem("diary");
if (savedDiary) diaryText.value = savedDiary;

diaryText.addEventListener("input", () => {
    localStorage.setItem("diary", diaryText.value);
    status.textContent = "Guardado ✨";
    status.classList.add("show");
    setTimeout(() => status.classList.remove("show"), 1200);
});

// AJUSTES
const themeInput = document.getElementById("themeColor");

const savedColor = localStorage.getItem("themeColor");
if (savedColor) {
    document.documentElement.style.setProperty("--main-color", savedColor);
    themeInput.value = savedColor;
}

function saveTheme() {
    const color = themeInput.value;
    document.documentElement.style.setProperty("--main-color", color);
    localStorage.setItem("themeColor", color);
}
