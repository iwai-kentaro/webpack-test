export function hover() {
        const h1 = document.querySelector("h1");
        h1.addEventListener("click", function () {
            h1.style.color = "red";
        })
        h1.addEventListener("mouseout", function () {
            h1.style.color = "#333";
        })
}
