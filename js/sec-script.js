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


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add scroll effect to header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header")
  if (window.scrollY > 100) {
    header.style.opacity = "0.95"
    header.style.backdropFilter = "blur(10px)"
  } else {
    header.style.opacity = "0.9"
    header.style.backdropFilter = "none"
  }
})
