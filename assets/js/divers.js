const search = document.querySelector(".search")
const modal = document.getElementsByClassName("searching")
const statics = document.querySelectorAll(".statics")
const moreInfo = document.querySelectorAll(".more-info")
const slides = document.querySelector(".text-person")


search.addEventListener("click", getSearch)

function getSearch() {
    const existingModalSearch = modal[0].querySelector(".modalSearch")
    if (existingModalSearch) {
        existingModalSearch.remove()
    }
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
    event.target.style.color = "initial"
}

function getMore(event) {
    var parent = event.target.closest('.infos');
    var moreInfoContent = parent.querySelector('.more-info-content');
    moreInfoContent.style.display = (moreInfoContent.style.display === 'none') ? 'block' : 'none';
}

let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const testimonialItems = document.querySelectorAll('.testimonial-item');

// Function to switch testimonials
function switchTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    if (i === index) {
      testimonial.classList.add('active');
    } else {
      testimonial.classList.remove('active');
    }
  });
}

// Click event for testimonial items
testimonialItems.forEach(item => {
  item.addEventListener('click', function() {
    const index = parseInt(this.getAttribute('data-index'));
    currentIndex = index;
    switchTestimonial(currentIndex);
  });
});

// Automatic carousel logic
function autoCarousel() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  switchTestimonial(currentIndex);
}

setInterval(autoCarousel, 3000);
  