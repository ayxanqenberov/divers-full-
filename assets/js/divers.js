const search = document.querySelector(".search")
const modal = document.getElementsByClassName("searching")
const statics = document.querySelectorAll(".statics")
const moreInfo = document.querySelectorAll(".more-info")

search.addEventListener("click", getSearch)

function getSearch() {
    // remove existing modal search element
    const existingModalSearch = modal[0].querySelector(".modalSearch")
    if (existingModalSearch) {
        existingModalSearch.remove()
    }

    // append new modal search element
    modal[0].innerHTML += `
    <div class="modalSearch">
            <i class="closeSearch fa-regular fa-circle-xmark" onclick="getclose()"></i>
            <div>
                <input type="text" placeholder="Search..." autocomplete="off">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    `
    modal[0].style.visibility = "visible"
}

function getclose() {
    modal[0].style.visibility = "hidden"
}

window.addEventListener("scroll", () => {
    const header = document.querySelector(".down-list")
    if (window.scrollY > 200) {
        header.classList.add("headerAfter")
    } else {
        header.classList.remove("headerAfter")
    }
})

statics.forEach(static => {
    const clientValue = +static.textContent;
    const duration = 1000;
    function client(startTime) {
        const currentTime = performance.now();
        const progress = (currentTime - startTime) / duration;
        static.textContent = Math.floor(progress * clientValue);
        if (progress < 1) requestAnimationFrame(() => client(startTime));
    }
    client(performance.now());
})

moreInfo.forEach(item => {
    item.addEventListener("click", getMore)
    item.addEventListener("mouseover", getChange)
    item.addEventListener("mouseout", resetChange)
})

function getChange(event) {
    event.target.style.background = "blue"
    event.target.style.color = "white"
}

function resetChange(event) {
    event.target.style.background = "white"
    event.target.style.color = "initial" // or any other default color
}

function getMore(event) {
    var parent = event.target.closest('.infos');
    var moreInfoContent = parent.querySelector('.more-info-content');
    moreInfoContent.style.display = (moreInfoContent.style.display === 'none') ? 'block' : 'none';
}