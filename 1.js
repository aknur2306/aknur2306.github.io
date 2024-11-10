document.querySelectorAll('.register-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Тіркелу функциясы әзірленуде');
    });
});

document.querySelectorAll('.login-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Кіру функциясы әзірленуде');
    });
});

function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

