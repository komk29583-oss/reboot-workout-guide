const bodyParts = document.querySelectorAll(".body-part");

bodyParts.forEach(function (part) {

    part.addEventListener("click", function () {

        part.classList.toggle("open");

    });

});

const exercises = {
    "1": [
        {
            name: "ダンベルカール",
            link: "dumbbell-curl.html"
        }
    ],

    "3": [
        {
            name: "ダンベルフライ",
            link: "dumbbell-fly.html"
        },
        {
            name: "ベンチプレス",
            link: "bench-press.html"
        },
        {
            name: "インクラインベンチプレス",
            link: "incline-bench-press.html"
        },
        {
            name: "デクラインベンチプレス",
            link: "decline-bench-press.html"
        },
        {
            name: "ダンベルベンチプレス",
            link: "dumbbell-bench-press.html"
        }
    ],

    "4": [
        {
            name: "ダンベルショルダープレス",
            link: "dumbbell-shoulder-press.html"
        },
        {
            name: "サイドレイズ",
            link: "side-raise.html"
        },
        {
            name: "フロントレイズ",
            link: "front-raise.html"
        }
    ],

    "6": [
        {
            name: "ダンベルスクワット",
            link: "dumbbell-squat.html"
        }
    ],

    "10": [
        {
            name: "ワンハンドロー",
            link: "one-hand-row.html"
        }
    ]
};
const searchInput = document.getElementById("body-search-input");
const searchButton = document.getElementById("body-search-button");
const searchResults = document.getElementById("search-results");
const normalMenu = document.getElementById("normal-menu");

searchButton.addEventListener("click", function () {

    const number = searchInput.value.trim();

    searchResults.innerHTML = "";

    // 通常のメニューを隠す
    normalMenu.style.display = "none";

    if (exercises[number]) {

        exercises[number].forEach(function (exercise) {

            const link = document.createElement("a");

            link.href = exercise.link;
            link.textContent = exercise.name;
            link.className = "search-result-item";

            searchResults.appendChild(link);

        });

    } else {

        searchResults.textContent = "該当する種目がありません";

    }

});