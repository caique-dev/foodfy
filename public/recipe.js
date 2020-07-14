const daddy = document.querySelectorAll(".localiza")
let visibility = true

for (let sujeito of daddy)  {
    sujeito.querySelector("span").addEventListener("click", () => {
        sujeito.classList.toggle("some")
        if (visibility == true) {
            sujeito.querySelector("span").innerHTML = "esconder"
            visibility = false
        } else {
            sujeito.querySelector("span").innerHTML = "mostrar"
            visibility = true
        }
    })
}