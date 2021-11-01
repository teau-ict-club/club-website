const filterItems = document.querySelector(".buttons-bar")
const filterImg = document.querySelectorAll(".img-container")
window.onload = () => {
    filterItems.onclick = (selectedItem) => {
        if (selectedItem.target.classList.contains("item")) {
            (filterItems.querySelector(".active")).classList.remove("active")
            selectedItem.target.classList.add("active")
            let filterName = selectedItem.target.getAttribute("data-name")
            filterImg.forEach((Image) => {
                let filterImages = Image.getAttribute("data-name")
                if ((filterImages == filterName) || (filterName == "all")) {
                    Image.classList.remove("hide")
                    Image.classList.add("show")
                }
                else {
                    Image.classList.add("hide")
                    Image.classList.remove("show")
                }
            })
        }
    }
}

let imgBox = document.querySelector(".img-box")
let previews = document.querySelectorAll(".gallery img")
let original = document.querySelector(".full-img")
let imgText = document.querySelector(".caption")

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        imgBox.classList.add("open")
        original.classList.add("open")
        let originalSrc = preview.getAttribute('data-original')
        original.src = originalSrc
        let altText = preview.alt
        imgText.textContent = altText
    })
})

imgBox.addEventListener("click", (e) => {
    if (e.target.classList.contains("img-box")) {
        imgBox.classList.remove("open")
        original.classList.remove("open")
    }
})