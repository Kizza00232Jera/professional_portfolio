/* Toggle in projects */
let btn = document.querySelectorAll(".toggleproject");
let i;

for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        this.classList.toggle("toggleproject_active");
        const answer = this.nextElementSibling;
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
}