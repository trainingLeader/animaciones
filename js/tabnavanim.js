let tabs = document.querySelectorAll(".tab");
    let overlay = document.querySelector(".overlay");

    tabs.forEach((tab) => {
        tab.addEventListener("click", function () {
            tabs.forEach((tab) => {
                tab.classList.remove("tab-is-active");
            });
            this.classList.add("tab-is-active");
        });
    });