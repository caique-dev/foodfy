const elements = document.querySelectorAll(".localiza")
let visibility = true

for (let element of elements)  {
    element.querySelector("span").addEventListener("click", () => {
        element.classList.toggle("some")
        if (visibility == true) {
            element.querySelector("span").innerHTML = "esconder"
            visibility = false
        } else {
            element.querySelector("span").innerHTML = "mostrar"
            visibility = true
        }
    })
}