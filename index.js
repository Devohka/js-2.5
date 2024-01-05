const textEl = document.querySelector("[data-text]");
const newGameEl = document.querySelector("[data-newGame]");

const keys = ["A", "D", "E", "B", "C", "F"];

let currentKeyIndex = 0;

document.addEventListener("keydown", (e) => {
    const bigKey = e.key.toUpperCase();
    if (bigKey === keys[currentKeyIndex]) {
        PNotify.success({
            title: "Хороша робота",
            text: "Лишилося ще багато роботи",
        });
        textEl.textContent = keys[currentKeyIndex];
        currentKeyIndex++;

    } else {
        PNotify.error({
            title: "ПОГАНООО",
            text: "ЛЮДИНА ПАВУК НЕ ГОРДИТЬСЯ ТОБОЮ",
        });
    };
});

document.addEventListener("keypress", (e) => {
    e.preventDefault();
});

newGameEl.addEventListener("click", () => {
    currentKeyIndex = 0;

});

// 2



const canvas = document.querySelector("#sales-chart");
const chartData = {
    labels: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
    ],
    datasets: [
        {
            label: "Продажі за останній місяць",
            data: [
                150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
                600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
                1250, 1300, 1350,
            ],
            backgroundColor: "#2196f3",
            borderColor: "#2196f3",
            borderWidth: 1,
        },
    ],
};
const salesChart = new Chart(canvas, {
    type: "line",
    data: chartData,
});