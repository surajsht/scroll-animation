let box = document.querySelectorAll(".box")

window.addEventListener("scroll", scroll)

function scroll() {
  let windowHeight = window.innerHeight

  box.forEach(function (item) {
    let itemPosition = item.getBoundingClientRect().top + 200

    if (itemPosition < windowHeight) {
      item.classList.add("show")
    } else {
      item.classList.remove("show")
    }
  })
}

scroll()
