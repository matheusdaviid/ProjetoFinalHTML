document.addEventListener("click", function (event) {
    let dropdowns = document.querySelectorAll(".dropdown-menu");
    let isButton = event.target.matches(".dropdown button");

    dropdowns.forEach((menu) => {
        if (!menu.contains(event.target) && !isButton) {
            menu.style.display = "none";
        }
    });

    if (isButton) {
        let menu = event.target.nextElementSibling;
        let isOpen = menu.style.display === "block";

        dropdowns.forEach((m) => (m.style.display = "none"));
        menu.style.display = isOpen ? "none" : "block";
    }
});