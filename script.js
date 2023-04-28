const question = document.querySelectorAll(".question");
const img = document.querySelectorAll(".icon-image");
const answer = document.querySelectorAll(".answer");

for (let index = 0; index < question.length; index++) {
    const element = question[index];
    element.addEventListener("click", () => {
        element.parentElement.classList.toggle("clicked")
    })
}