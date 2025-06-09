// Theme Toggle
const themeToggle = document.getElementById("themeToggle")
const body = document.body

themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  body.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
})

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "light"
body.setAttribute("data-theme", savedTheme)

// Rotating Text Animation
const textItems = document.querySelectorAll(".text-item")
let currentIndex = 0

function rotateText() {
  textItems.forEach((item, index) => {
    item.classList.remove("active", "prev")
    if (index === currentIndex) {
      item.classList.add("active")
    } else if (index === (currentIndex - 1 + textItems.length) % textItems.length) {
      item.classList.add("prev")
    }
  })

  currentIndex = (currentIndex + 1) % textItems.length
}

if (textItems.length > 0) {
  setInterval(rotateText, 3000)
}

// Dropdown Menus
const dropdownToggles = document.querySelectorAll(".dropdown-toggle")

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    e.stopPropagation()
    const dropdown = toggle.nextElementSibling
    const isActive = dropdown.classList.contains("active")

    // Close all dropdowns
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      menu.classList.remove("active")
    })
    document.querySelectorAll(".dropdown-toggle").forEach((btn) => {
      btn.classList.remove("active")
    })

    // Toggle current dropdown
    if (!isActive) {
      dropdown.classList.add("active")
      toggle.classList.add("active")
    }
  })
})

// Close dropdowns when clicking outside
document.addEventListener("click", () => {
  document.querySelectorAll(".dropdown-menu").forEach((menu) => {
    menu.classList.remove("active")
  })
  document.querySelectorAll(".dropdown-toggle").forEach((btn) => {
    btn.classList.remove("active")
  })
})
// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item")

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question")

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active")

    // Close all FAQ items
    faqItems.forEach((faqItem) => {
      faqItem.classList.remove("active")
    })

    // Open clicked item if it wasn't active
    if (!isActive) {
      item.classList.add("active")
    }
  })
})
