const bodyParts = document.querySelectorAll(".body-part");

bodyParts.forEach(function (part) {

    part.addEventListener("click", function () {

        part.classList.toggle("open");

    });

});