document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab-content");
    const links = document.querySelectorAll("ul.flex.border-b a");

    links.forEach((link, index) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            tabs.forEach((tab) => tab.classList.remove("active"));
            tabs[index].classList.add("active");

            links.forEach((link) => link.classList.remove("text-yellow-600"));
            link.classList.add("text-yellow-600");
        });
    });
});
