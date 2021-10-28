const filterItems = document.querySelector(".buttons-bar")
const filterImg = document.querySelectorAll(".img-container")

window.onload = () => {
    filterItems.onclick = (selectedItem) => {
        if (selectedItem.target.classList.contains("item")) {
            (filterItems.querySelector(".active")).classList.remove("active")
            selectedItem.target.classList.add("active")
            let filterName = selectedItem.target.getAttribute("data-name")
            // console.log(filterName)
            filterImg.forEach((Image) => {
                let filterImages = Image.getAttribute("data-name")
                // console.log(filterImages)
                if ((filterImages == filterName) || (filterName == "all"))
                {
                    Image.classList.remove("hide")
                    Image.classList.add("show")
                }
                else {
                    Image.classList.add("hide")
                    Image.classList.remove("show")
                }
            })
        }
        // else {
        //     console.log("false")
        // }
    }
}