// Presentation script
document.addEventListener("DOMContentLoaded", function () {
    const continentsDropdown = document.getElementById("continents-dropdown");
    const buttonsTime = document.getElementsByClassName(
        "presentation__button-time"
    );
    const startButton = document.getElementsByClassName(
        "presentation__button-start"
    )[0];
    const closeIcon = document.getElementsByClassName(
        "presentation__header-link"
    )[0];

    // Millisenconds
    let continent = "all continents";
    let time = -1; //free time
    let timesOptions = [-1, 30000, 60000];

    // Events
    continentsDropdown.addEventListener("change", function (event) {
        continent = event.target.value;
    });

    for (let i = 0; i < buttonsTime.length; i++) {
        buttonsTime[i].addEventListener("click", function () {
            time = timesOptions[i];
        });
    }

    startButton.addEventListener("click", function () {
        sessionStorage.setItem("continent", continent);
        sessionStorage.setItem("time", time);
    });

    closeIcon.addEventListener("click", function () {
        sessionStorage.setItem("continent", continent);
        sessionStorage.setItem("time", time);
    });
});
