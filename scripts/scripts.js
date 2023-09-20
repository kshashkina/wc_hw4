document.addEventListener("DOMContentLoaded", function () {
    const dropdownButton = document.getElementById("dropdown-button");
    const dropdownMenu = document.getElementById("dropdown-menu");

    let menuActive = false;

    dropdownButton.addEventListener("click", function () {
        if (menuActive) {
            dropdownMenu.classList.add("hidden");
            menuActive = false;
        } else {
            dropdownMenu.classList.remove("hidden");
            menuActive = true;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const dropdownButton = document.getElementById("search-container");
    const dropdownMenu = document.getElementById("dropdown-menu-input");

    let menuActive = false;

    dropdownButton.addEventListener("click", function () {
        if (menuActive) {
            dropdownMenu.classList.add("hidden");
            menuActive = false;
        } else {
            dropdownMenu.classList.remove("hidden");
            menuActive = true;
        }
    });
});


const listItems = document.querySelectorAll('#my-list li');

listItems.forEach((item) => {
    let originalText = "";

    item.addEventListener('mouseenter', function() {
        originalText = item.textContent;

        item.textContent = item.getAttribute('data-text');
    });

    item.addEventListener('mouseleave', function() {
        item.textContent = originalText;
    });
});

